import axios from 'axios'

function newPost (user, content) {
  return {
    user,
    content,
    created_at: new Date(),
    children: []
  }
}

function findPost (needle, haystack) {
  let result

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i].id === needle.id) {
      result = haystack[i]

      break
    }

    result = findPost(needle, haystack[i].children)

    if (result) {
      break
    }
  }

  return result
}

export const state = () => ({
  data: []
})

export const getters = {
  list (state) {
    return state.data
  }
}

export const mutations = {
  set (state, data) {
    state.data = data
  },
  unshift (state, post) {
    state.data.unshift(post)
  },
  push (state, { parent, post }) {
    findPost(parent, state.data).children.push(post)
  }
}

export const actions = {
  async list ({ commit }) {
    let { data } = await axios.get('http://localhost:8000/api/posts')

    data = data.reverse()

    commit('set', data)

    return data
  },
  async post ({ commit, rootState }, content) {
    let { data } = await axios.post('/api/posts', { content })

    commit('unshift', {
      id: data.id,
      ...newPost(rootState.user.data, content)
    })
  },
  async reply ({ commit, rootState }, { parent, content }) {
    let { data } = await axios.post(`/api/posts/${parent.id}/reply`, { content })

    commit('push', {
      parent,
      post: {
        id: data.id,
        ...newPost(rootState.user.data, content)
      }
    })
  }
}

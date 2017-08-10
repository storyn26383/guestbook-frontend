export const state = () => ({
  user: {
    guest: true,
    data: {}
  }
})

export const mutations = {
  setUser (state, user) {
    state.user.data = user
    state.user.guest = false
  },
  unsetUser (state, user) {
    state.user.data = {}
    state.user.guest = true
  }
}

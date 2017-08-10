export const state = () => ({
  guest: true,
  data: {}
})

export const mutations = {
  set (state, user) {
    state.data = user
    state.guest = false
  },
  unset (state, user) {
    state.data = {}
    state.guest = true
  }
}

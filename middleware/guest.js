export default ({ store, redirect }) => {
  if (!store.state.user.guest) {
    redirect('/')
  }
}

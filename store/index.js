export const state = () => ({
  isOpenSideNav: false
})

export const mutations = {
  initState (state) {
    console.log('INIT STATE', state);
    state.auth.user = JSON.parse(localStorage.getItem('user'))
    state.auth.token = localStorage.getItem('token')
  }
}
export const state = () => ({
  isOpenSideNav: false,
  dialogs: {
    confirmEmailDialog: false
  }
})

export const mutations = {
  initState (state) {
    console.log('INIT STATE', state);
    state.auth.user = JSON.parse(localStorage.getItem('user'))
    state.auth.token = localStorage.getItem('token')
  },

  toggleConfirmEmailDialog (state, value) {
    console.log('value MODAL', value)
    state.dialogs.confirmEmailDialog = value
  } 
}
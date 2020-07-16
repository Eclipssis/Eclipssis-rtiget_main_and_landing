export const state = () => ({
  isOpenSideNav: false
})

export const mutations = {
  toggleSideNav (state) {
    state.isOpenSideNav = !state.isOpenSideNav
  }
}
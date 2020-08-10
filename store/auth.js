

export const state = () => ({
  eventsList: []
})

export const mutations = {
  
}

export const actions = {
  async registration (context, payload) {

    try {
      const response = await this.$axios.$post('/auth/registration')
      return response
    } catch (error) {
      // handler error
    }
  }
  
}
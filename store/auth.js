

export const state = () => ({
  eventsList: [],
  token: null,
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user
    localStorage.setItem('user', user)
  },

  setToken(state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },

  clearAuthInfo (state) {
    state.token = null
    state.user = null
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
}

export const actions = {
  async registration (context, payload) {    
    try {
      const response = await this.$axios.$post('/auth/registration', {
        email: payload.email,
        pass: payload.password,
        phone: payload.phone,
        role: payload.role,
        name: ''
      })
    } catch (error) {
      throw error.response.data
    }
  },

  async login (context, payload) {
    console.log('payload', payload)
    try {
      const response = await this.$axios.$post('/auth/get-token', {
        login: payload.email,
        password: payload.password,
      })
      console.log('user', response[0].user)
      console.log('token', response[0].token)
      context.commit('setUser', JSON.stringify(response[0].user))
      context.commit('setToken', response[0].token)
      return response
    } catch (error) {
      throw error
    }
  },

  async recoveryPassword (context, payload) {
    try {
      const response = await this.$axios.$post('/auth/recovery', {
        login: payload.email,
        pass: payload.password,
        rePass: payload.passwordReset,
      })
      console.log('response', response)
    } catch (error) {
      
    }
  },

  async checkToken (context, token) {
    try {
      // const response = await this.$axios.$post('/auth/check-token', {
      //   token: token
      // })
      let isValid = true
      return isValid
    } catch (error) {
      
    }
  },

  async logOut (commit, payload) {
    commit('clearAuthInfo')
  }
  
}
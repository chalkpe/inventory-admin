import * as types from './mutation-types'

export default {
  [types.UPDATE_TOKEN] (state, token) {
    state.token = token
  },

  [types.AUTH_ERROR] (state, message) {
    state.authError = message
  }
}
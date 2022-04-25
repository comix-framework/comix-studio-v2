import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'
import { IUser } from '~/models/user'
import { GET_ME } from '~/graphql/query/user.query'
import { Me } from '~/graphql/query/__generated__/Me'

interface IUserStore {
  user?: IUser,
  _token: string
}

export const useUser = defineStore({
  id: 'user',

  state: (): IUserStore => ({
    user: undefined,
    _token: ''
  }),

  getters: {
    auth: state => state.user !== undefined
  },

  actions: {
    setUser: (state, payload: IUser) => {
      state.user = payload
    },

    setToken (token: string) {
      this._token = token
    },

    async getMe () {
      const { $apollo } = useNuxtApp()
      try {
        const { data } = await $apollo.apolloClient.query({
          query: GET_ME
        })
        this.user = data.me
      } catch (e) {}
    }
  }
})

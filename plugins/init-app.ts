import {defineNuxtPlugin} from '#app'
import { useCookie, setCookie } from 'h3'

export default defineNuxtPlugin(async (nuxtApp) => {
    const req = nuxtApp.ssrContext.req
    const _token = useCookie(req, '_token')

    if(_token) {
        setCookie(req, '_token', _token, {
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: true
        })
    }

})

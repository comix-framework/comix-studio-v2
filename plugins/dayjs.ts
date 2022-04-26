import { defineNuxtPlugin } from '#app'

import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import relativeTime from 'dayjs/plugin/relativeTime'

export default defineNuxtPlugin(() => {
  dayjs.extend(relativeTime)
  dayjs.locale('vi')

  return {
    provide: {
      dayjs
    }
  }
})

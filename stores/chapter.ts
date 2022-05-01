import { defineStore } from 'pinia'
import { StudioChapter_studioChapter } from '~/graphql/query/__generated__/StudioChapter'

interface IUserStore {
  chapter?: StudioChapter_studioChapter
}

export const useChapter = defineStore({
  id: 'chapter',

  state: (): IUserStore => ({
    chapter: null
  }),

  getters: {
    count: state => state.chapter?.content.length || 0
  },

  actions: {
    setChapter (chapter: StudioChapter_studioChapter) {
      this.chapter = chapter
    }
  }
})

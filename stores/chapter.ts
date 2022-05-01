import { defineStore } from 'pinia'
import { StudioChapter_studioChapter } from '~/graphql/query/__generated__/StudioChapter'

interface IChapterStore {
  chapter?: StudioChapter_studioChapter
  _token: string
}

export const useChapter = defineStore({
  id: 'chapter',

  state: (): IChapterStore => ({
    chapter: null,
    _token: ''
  }),

  getters: {
    count: state => state.chapter?.content?.length || 0
  },

  actions: {}
})

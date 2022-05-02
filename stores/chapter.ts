import { defineStore } from 'pinia'
import { StudioChapter_studioChapter } from '~/graphql/query/__generated__/StudioChapter'

interface IUserStore {
  chapter: StudioChapter_studioChapter
  isEdit: boolean
  selected: string[]
}

export const useChapter = defineStore({
  id: 'chapter',

  state: (): IUserStore => ({
    chapter: {
      name: '',
      content: []
    } as StudioChapter_studioChapter,
    isEdit: false,
    selected: []
  }),

  getters: {
    count: state => state.chapter?.content.length || 0,
    story: state => state.chapter?.story
  },

  actions: {
    setChapter (chapter: StudioChapter_studioChapter) {
      this.chapter = chapter
    },
    setIsEdit (isEdit: boolean) {
      this.isEdit = isEdit
    },
    removeImages (ids: string[]) {
      this.chapter.content = this.chapter.content.filter(item => !ids.includes(item.id))
      this.selected = this.selected.filter(item => !ids.includes(item.id))
      if (!this.chapter.content.length) {
        this.isEdit = false
      }
    }
  }
})

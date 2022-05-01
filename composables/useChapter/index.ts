/**
 * @param id { String }
 * @constructor
 */
import { useQuery } from '@vue/apollo-composable'
import { useNuxtApp, useState } from '#app'
import { GET_CHAPTER } from '~/graphql/query/story.query'
// eslint-disable-next-line camelcase
import { StudioChapter, StudioChapter_studioChapter } from '~/graphql/query/__generated__/StudioChapter'
import { watch } from '#build/imports'

export const UseChapter = (id: string) => {
  // const { $apollo } = useNuxtApp()

  const { loading, result } = useQuery<StudioChapter>(GET_CHAPTER, {
    chapter: id
  })
  // eslint-disable-next-line camelcase
  const chapter = useState<StudioChapter_studioChapter>('chapter', () => undefined)
  watch(result, (data) => {
    if (data.studioChapter) {
      chapter.value = data.studioChapter
    }
  })

  const { $axios } = useNuxtApp()
  const uploadImage = async (body: FormData) => {
    body.append('endpoint', 'chapter')
    const { data } = await $axios.post('/upload/single', body)
    return data
  }

  /**
   * Select image
   */
  const selectImages = useState<string[]>('selectImages', () => [])

  return {
    loading,
    chapter,
    uploadImage,
    selectImages
  }
}

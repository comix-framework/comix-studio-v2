/**
 * @param id { String }
 * @constructor
 */
import { useQuery, useResult } from '@vue/apollo-composable'
import { useNuxtApp } from '#app'
import { GET_CHAPTER } from '~/graphql/query/story.query'
import { StudioChapter } from '~/graphql/query/__generated__/StudioChapter'

export const UseChapter = (id: string) => {
  // const { $apollo } = useNuxtApp()

  const { loading, result } = useQuery<StudioChapter>(GET_CHAPTER, {
    chapter: id
  })
  const chapter = useResult(result, undefined, data => Object.assign({}, data.studioChapter))

  const { $axios } = useNuxtApp()
  const uploadImage = async (body: FormData) => {
    body.append('endpoint', 'chapter')
    const { data } = await $axios.post('/upload/single', body)
    return data
  }

  return {
    loading,
    chapter,
    uploadImage
  }
}

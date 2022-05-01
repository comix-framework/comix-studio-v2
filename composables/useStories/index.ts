import { useState } from '#app'
import { useLazyQuery, useResult } from '@vue/apollo-composable'
import { StoriesSortEnum } from '~/models/story'
import { GET_COUNT_STORIES, GET_STORIES } from '~/graphql/query/story.query'
import { StudioStories } from '~/graphql/query/__generated__/StudioStories'
import { GetCountStories } from '~/graphql/query/__generated__/getCountStories'

export const useStories = () => {
  const page = useState('page', () => 0)

  const storiesQuery = useLazyQuery<StudioStories>(GET_STORIES, {
    filter: {
      page: page.value,
      sort: StoriesSortEnum.CREATED_AT,
      limit: 4
    }
  })
  const getStories = () => {
    return storiesQuery.load()
  }

  const changePage = (_page: number) => {
    page.value = _page
    storiesQuery.variables.value.filter.page = page.value
    getStories()
  }

  const stories = useResult(storiesQuery.result, [], data => data?.studioStories)

  const { load: getCountStories, result: countResult } = useLazyQuery<GetCountStories>(GET_COUNT_STORIES)
  const count = useResult(countResult, 0, data => data?.studioCountStories)

  return {
    stories,
    page,
    count,
    getStories,
    getCountStories,
    loading: storiesQuery.loading,
    changePage
  }
}

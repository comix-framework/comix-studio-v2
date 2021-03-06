<template>
  <div>
    <div v-if="isReady">
      <div class="flex">
        <div class="w-[210px] h-[280px] overflow-hidden rounded border-[3px] border-white shadow-md mr-5 flex-shrink-0">
          <img
            :src="story.avatar"
            class="w-full h-full object-cover transform transition duration-300 hover:scale-105"
            alt=""
          >
        </div>

        <div class="w-full flex flex-col">
          <h3 class="text-xl">
            {{ story.name }}
          </h3>

          <h4 class="font-normal text-gray-500">
            BY {{ story.authors }}
          </h4>

          <p class="line-clamp-3 text-gray-500">
            {{ story.content }}
          </p>

          <div class="border h-[106px] mt-auto flex items-center p-5">
            <story-info-item title="Trạng Thái" :value="story.status" />
            <story-info-item title="Lượt Xem" :value="story.countViews" />
            <story-info-item title="Đánh Giá" :value="story.countRating" />
            <story-info-item title="Cập Nhật" :value="$dayjs(story.updatedAt).fromNow()" />
          </div>
        </div>
      </div>

      <StoryChapters class="mt-6" :chapters="chapters" />

      <client-only>
        <Teleport to="#actions">
          <a-button
            class="uppercase fix-icon-button flex"
            type="primary"
            size="large"
            @click="$router.push({ name: 'chapter-create', params: { slug: story.slug } })"
          >
            <template #icon>
              <plus-outlined class="relative -top-1" />
            </template>
            Chương Mới
          </a-button>
        </Teleport>
      </client-only>
    </div>
    <div v-else />
  </div>
</template>

<script lang="ts" setup>

import { useQuery, useResult } from '@vue/apollo-composable'
import { useNuxtApp, useRoute } from '#app'
import { PlusOutlined } from '@ant-design/icons-vue'
import { GET_STORY_CHAPTERS } from '~/graphql/query/story.query'
import { computed } from '#imports'
import StoryChapters from '~/components/story/StoryChapters.vue'
import { StudioStoryChapters } from '~/graphql/query/__generated__/StudioStoryChapters'

const $route = useRoute()
const { $dayjs } = useNuxtApp()

const { result, loading: isLoading } = useQuery<StudioStoryChapters>(GET_STORY_CHAPTERS, {
  story: $route.params.slug
})

const story = useResult(result, {}, data => data.studioStory)
const chapters = useResult(result, {}, data => data.studioChapters)

const isReady = computed(() => !isLoading.value && Object.keys(story.value).length > 0)

</script>

<script lang="ts">
export default {
  name: 'StoryPage'
}
</script>

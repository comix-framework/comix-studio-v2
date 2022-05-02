<template>
  <div>
    <client-only>
      <a-table
        :loading="c.loading.value"
        :columns="columns"
        :data-source="c.stories.value || []"
        :pagination="{ total: c.count.value, showLessItems: true, defaultPageSize: 4 }"
        @change="c.changePage($event.current - 1)"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <nuxt-link :to="{ name: 'story', params: { slug: record.slug } }" class="flex items-center text-gray-700">
              <img
                width="60"
                height="80"
                :src="record.avatar"
                alt="book cover"
                class="rounded"
              >
              <span class="font-medium ml-2">{{ record.name }}</span>
            </nuxt-link>
          </template>

          <template v-else-if="column.key === 'updatedAt'">
            {{ $dayjs(record.updatedAt).fromNow() }}
          </template>

          <template v-else-if="column.key === 'action'">
            <a-button type="primary" size="small" @click="$router.push({ name: 'chapter', params: { slug: record.slug } })">
              <svg class="fill-current text-white" width="1em" height="1em">
                <use xlink:href="#i-upload" />
              </svg>
            </a-button>

            <a-button class="ml-2" type="danger" size="small">
              <svg class="fill-current text-white" width="1em" height="1em">
                <use xlink:href="#i-remove" />
              </svg>
            </a-button>
          </template>
        </template>
      </a-table>
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, useNuxtApp, useStories } from '#imports'

const columns = [
  {
    title: 'TÊN',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'LƯỢT XEM',
    dataIndex: 'countViews',
    key: 'countViews',
    align: 'center',
    width: 120
  },
  {
    title: 'TRẠNG THÁI',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    width: 150
  },
  {
    title: 'CẬP NHẬT',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    align: 'center',
    width: 200
  },
  {
    title: 'HÀNH ĐỘNG',
    key: 'action',
    align: 'right'
  }
]

const { $dayjs } = useNuxtApp()

const c = useStories()
onMounted(() => {
  c.getCountStories()
  c.getStories()
})

</script>

<script lang="ts">
export default {
  name: 'StoriesView'
}
</script>

<style>
#stories #page-body > div {
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
}
</style>

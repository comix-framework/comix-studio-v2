<template>
  <a-table id="listChapters" :columns="columns" :data-source="chapters">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <div class="flex items-center">
          <img
            v-if="record.avatar"
            width="60"
            height="80"
            :src="record.avatar"
            alt="book cover"
            class="rounded"
          >
          <span class="font-medium ml-2">{{ record.name }}</span>
        </div>
      </template>

      <template v-else-if="column.key === 'createdAt'">
        {{ $dayjs(record.createdAt).fromNow() }}
      </template>

      <template v-else-if="column.key === 'action'">
        <a-button type="primary" size="small">
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
</template>

<script setup lang="ts">

import { useNuxtApp } from '#imports'

const columns = [
  {
    title: 'TÊN CHƯƠNG',
    dataIndex: 'name',
    key: 'name',
    fixed: true
  },
  {
    title: 'LƯỢT XEM',
    dataIndex: 'countViews',
    key: 'countViews',
    align: 'center',
    width: 200
  },
  {
    title: 'LƯỢT BÌNH LUẬN',
    dataIndex: 'countComments',
    key: 'countComments',
    align: 'center',
    width: 200
  },
  {
    title: 'NGÀY ĐĂNG',
    key: 'createdAt',
    dataIndex: 'createdAt',
    align: 'center',
    width: 200
  },
  {
    title: 'HÀNH ĐỘNG',
    key: 'action',
    align: 'right'
  }
]

defineProps({
  chapters: {
    type: Array,
    default: () => []
  }
})

const { $dayjs } = useNuxtApp()
</script>
<script lang="ts">
export default {
  name: 'StoryChapters'
}
</script>

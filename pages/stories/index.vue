<template>
  <div>
    <client-only>
      <a-table :columns="columns" :data-source="c.stories.value || []">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'updatedAt'">
            {{ $dayjs(record.updatedAt).fromNow() }}
          </template>

          <template v-else-if="column.key === 'action'">
            <a-button type="primary" size="small">
              <svg class="fill-current text-white" width="1em" height="1em">
                <use xlink:href="#i-upload" />
              </svg>
            </a-button>

            <a-button class="ml-2" type="danger" size="small">
              <svg class="fill-current text-white" width="1em" height="1em">
                <use xlink:href="#i-upload" />
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
    title: 'Tên',
    dataIndex: 'name',
    key: 'name',
    width: 300
  },
  {
    title: 'Lượt Xem',
    dataIndex: 'countViews',
    key: 'countViews',
    align: 'center',
    width: 120
  },
  {
    title: 'Trạng Thái',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    width: 150
  },
  {
    title: 'Cập Nhật',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    align: 'center',
    width: 200
  },
  {
    title: 'Hành Động',
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

defineExpose({
  $dayjs
})

</script>

<script lang="ts">
export default {
  name: 'StoriesView'
}
</script>

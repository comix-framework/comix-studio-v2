<template>
  <draggable
    v-model="content"
    class="grid grid-cols-12 gap-5"
    v-bind="{
      animation: 200,
      group: 'description',
      disabled: false,
      ghostClass: 'ghost'
    }"
    item-key="id"
    :component-data="{
      tag: 'div',
      type: 'transition-group',
      name: 'flip-list'
    }"
    @start="drag = true"
    @end="drag = false"
  >
    <template #item="{element}">
      <div
        class="col-span-2 image-item border-[8px] border-white shadow-lg relative"
      >
        <div class="absolute z-20 flex justify-content items-center w-full h-full justify-center text-white text-[25px]">
          <check-outlined />
        </div>
        <a-spin class="z-10" :spinning="!!element.isLoading">
          <img class="w-full h-full object-cover" :src="$cdn(element.src, element.storage)" alt="">
        </a-spin>
      </div>
    </template>

    <template #footer>
      <div
        class="col-span-2 image-item"
      >
        <input
          id="inputImage"
          ref="inputImage"
          type="file"
          accept="image/*"
          class="!hidden"
          multiple
          @change="onChangeFiles($event.target)"
        >
        <div class="flex w-full h-full flex-col cursor-pointer" @click="$refs.inputImage.click()">
          <div class="h-full w-full bg-gray-100 flex items-center justify-center">
            <plus-outlined class="text-xl" :style="{color: '#355cdd'}" />
          </div>
          <a-button class="mt-auto flex items-center mt-2.5 shadow-lg" type="primary">
            Thêm Ảnh
            <template #icon>
              <plus-outlined class="relative -top-0.5" />
            </template>
          </a-button>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'

import { v4 as uuidv4 } from 'uuid'
import { PlusOutlined, CheckOutlined } from '@ant-design/icons-vue'
import { useNuxtApp, useState } from '#app'
import { computed } from '#imports'

const { $cdn } = useNuxtApp()

const props = defineProps({
  value: {
    type: Array,
    default: () => []
  }
})
const content = useState('content', () => props.value)

const count = computed(() => content.value.length)

const drag = useState('drag', () => false)

const { $axios } = useNuxtApp()
const uploadToServer = async (body: FormData) => {
  body.append('endpoint', 'chapter')
  const { data } = await $axios.post('/upload/single', body)
  return data
}

const emit = defineEmits(['input'])

const uploadImage = async (file: File, index: number) => {
  const formData = new FormData()
  formData.append('image', file)
  const { data } = await uploadToServer(formData)
  content[index - 1] = {
    id: content[index - 1],
    src: data,
    storage: 'local'
  }
  emit('input', content)
}

const onChangeFiles = ({ files }) => {
  for (let i = 0; i < files.length; i++) {
    content.value = [
      ...content.value,
      {
        id: uuidv4(),
        src: URL.createObjectURL(files[i]),
        isLoading: true,
        storage: 'blob'
      }
    ]
    uploadImage(files[i], count.value)
  }
}

</script>

<script lang="ts">
export default {
  name: 'ComicForm'
}
</script>

<style>

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
.image-item {
  aspect-ratio: 7/10;
  overflow: hidden;
}
</style>

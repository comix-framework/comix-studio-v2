<template>
  <draggable
    v-model="store.chapter.content"
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
        class="col-span-2 image-item shadow-lg relative"
      >
        <!--
        <input v-model="selectedImages" type="checkbox" class="hidden" name="chapter-content-check-box" :value="element.id">
-->
        <div class="absolute z-20 flex justify-content items-center w-full h-full justify-center text-white text-[25px] _overlay animate">
          <check-outlined />
        </div>
        <a-spin wrapper-class-name="z-10 h-full w-full border-[8px] border-white overflow-hidden _img animate" :spinning="!!element.isLoading">
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
import { useChapter } from '~/stores/chapter'

const store = useChapter()

const { $cdn } = useNuxtApp()

const drag = useState('drag', () => false)

const { $axios } = useNuxtApp()
const uploadToServer = async (body: FormData) => {
  body.append('endpoint', 'chapter')
  const { data } = await $axios.post('/upload/single', body)
  return data
}

const uploadImage = async (file: File, index: number) => {
  const formData = new FormData()
  formData.append('image', file)
  const { data } = await uploadToServer(formData)
  // @ts-ignore
  store.chapter.content[index - 1] = {
    id: store.chapter.content[index - 1].id,
    src: data,
    storage: 'local'
  }
}

const onChangeFiles = ({ files }) => {
  for (let i = 0; i < files.length; i++) {
    store.chapter.content = [
      ...store.chapter.content,
      {
        id: uuidv4(),
        src: URL.createObjectURL(files[i]),
        // @ts-ignore
        isLoading: true,
        storage: 'blob'
      }
    ]
    uploadImage(files[i], store.count)
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

#chapter-form.is-edit ._img {
  filter: blur(1px) brightness(0.8);
}

#chapter-form ._img .ant-spin-container {
  width: 100%;
  height: 100%;
}

#chapter-form:not(.is-edit) ._overlay > span {
  opacity: 0;
  transform: scale(0);
}

/*#chapter-form.is-edit .image-item  {
  !* Start the shake animation and make the animation last for 0.5 seconds *!
  animation: shake 1s;

  !* When the animation is finished, start again *!
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}*/
</style>

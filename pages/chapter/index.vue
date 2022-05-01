<template>
  <div>
    <template v-if="c.chapter.value">
      <a-form
        id="chapter-form"
        :class="{
          'is-edit': isEdit
        }"
        :model="c.chapter.value"
        name="chapter"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          class="chapter-input"
          name="name"
          :rules="rules.name"
          has-feedback
        >
          <a-input v-model:value="c.chapter.value.name" class="_name" placeholder="Nhập tên chương" />
        </a-form-item>

        <div class="h-3" />

        <a-form-item>
          <div class="border-b flex items-center justify-between">
            <h4 class="text-gray-400">
              Hình Ảnh
              <span class="text-[11px]">({{ c.chapter.value.content.length }})</span>
            </h4>

            <div>
              <a-button type="danger" size="small" @click="isEdit = !isEdit">
                <template #icon>
                  <edit-outlined class="relative -top-1" />
                </template>
                <span class="text-[13px]">Sửa</span>
              </a-button>
            </div>
          </div>

          <div class="h-3" />

          <client-only>
            <comic-form v-model="c.chapter.value.content" />
          </client-only>
        </a-form-item>
      </a-form>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useState } from '#app'
import { EditOutlined } from '@ant-design/icons-vue'
import { UseChapter } from '~/composables/useChapter'
import ComicForm from '~/components/chapter/ComicForm.vue'

const $route = useRoute()

const c = UseChapter($route.params.slug as string)

/**
 * Form
 */

const rules = {
  name: [
    {
      required: true,
      message: 'Tên chương là bắt buộc',
      trigger: ['blur', 'change']
    }
  ]
}

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const isEdit = useState('isEdit', () => false)

</script>

<script lang="ts">
export default {
  name: 'ChapterPage'
}
</script>

<style>
#chapter-form .chapter-input {
  padding: 0;
  margin: 0;
}

#chapter-form .chapter-input ._name {
  border: 0;
  font-size: 22px;
  font-weight: 600;
  color: #6c6c6c;
  padding-left: 0;
}

#chapter-form input:focus {
  outline: none;
  box-shadow: none;
}
</style>

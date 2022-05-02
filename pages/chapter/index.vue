<template>
  <div>
    <client-only>
      <a-spin :spinning="loading">
        <a-form
          id="chapter-form"
          :ref="(el) => formRef = el"
          :class="{
            'is-edit': store.isEdit
          }"
          :model="store.chapter"
          name="chapter"
          autocomplete="off"
        >
          <a-form-item
            class="chapter-input"
            name="name"
            :rules="rules.name"
            has-feedback
          >
            <a-input v-model:value="store.chapter.name" class="_name" placeholder="Nhập tên chương" />
          </a-form-item>

          <div class="h-3" />

          <a-form-item>
            <div class="border-b flex items-center justify-between">
              <h4 class="text-gray-400">
                Hình Ảnh
                <span class="text-[11px]">({{ store.count }})</span>
              </h4>

              <div>
                <a-button v-if="store.isEdit && store.selected.length" type="danger" size="small" @click="store.removeImages(store.selected)">
                  <template #icon>
                    <delete-outlined class="relative -top-1" />
                  </template>
                  <span class="text-[13px]">
                    Xoá <span>({{ store.selected.length }})</span>
                  </span>
                </a-button>

                <a-button v-if="store.chapter.content.length" class="ml-3" type="danger" size="small" @click="store.setIsEdit(!store.isEdit)">
                  <template #icon>
                    <edit-outlined v-if="!store.isEdit" class="relative -top-1" />
                    <close-outlined v-else class="relative -top-1" />
                  </template>
                  <span class="text-[13px]">
                    {{ store.isEdit ? 'Hủy' : 'Sửa' }}
                  </span>
                </a-button>
              </div>
            </div>

            <div class="h-3" />

            <client-only>
              <comic-form />
            </client-only>
          </a-form-item>
        </a-form>

        <Teleport to="#actions">
          <a-button
            v-if="!isDisabled.value"
            :loading="isLoading"
            class="uppercase fix-icon-button flex"
            type="primary"
            size="large"
            @click="onSubmit"
          >
            <template #icon>
              <check-outlined class="relative -top-1" />
            </template>
            Đăng Tải
          </a-button>
        </Teleport>
      </a-spin>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useState } from '#app'
import { EditOutlined, CloseOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons-vue'
import { useQuery } from '@vue/apollo-composable'
import ComicForm from '~/components/chapter/ComicForm.vue'
import { StudioChapter } from '~/graphql/query/__generated__/StudioChapter'
import { GET_CHAPTER } from '~/graphql/query/story.query'
import { useChapter } from '~/stores/chapter'
import { computed, watch } from '#imports'

const $route = useRoute()

const store = useChapter()

const { loading, result } = useQuery<StudioChapter>(GET_CHAPTER, {
  chapter: $route.params.slug as string
})

watch(result, (result) => {
  if (result) {
    store.setChapter(Object.assign({}, result.studioChapter))
  }
})

const isDisabled = computed(() => store.isEdit || !store.chapter.name || !store.chapter.content.length || loading.value)

/**
 * Form
 */

const formRef = useState('form', () => null)
const rules = {
  name: [
    {
      required: true,
      message: 'Tên chương là bắt buộc',
      trigger: ['blur', 'change']
    }
  ]
}

const isLoading = useState<boolean>('isLoading', () => false)
const onSubmit = async () => {
  isLoading.value = true
  try {
    await formRef.value.validate()
  } catch (error) {
    console.error(error)
  }
  // isLoading.value = false
}

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

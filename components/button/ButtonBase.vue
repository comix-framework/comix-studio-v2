<template>
  <button
    class="btn-text-size focus:outline-none btn-effect"
    :class="{
      _loading: c.isLoading,
      'opacity-50': disabled
    }"
    :disabled="disabled"
    @click.prevent="c.onClick()"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>

import { useButton } from '#imports'

const props = defineProps({
  callback: {
    type: Function,
    default: () => {}
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
)

// @ts-ignore
const c = useButton(props.callback)

</script>

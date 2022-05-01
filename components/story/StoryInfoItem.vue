<template>
  <div class="h-full w-full flex flex-col justify-evenly">
    <div class="uppercase text-xs font-medium text-gray-500">
      {{ title }}
    </div>

    <div class="font-medium">
      {{ value }}
    </div>

    <div>
      {{ subTitle }}
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [Number || String],
    required: true
  },
  subTitle: {
    type: String,
    default: ''
  }
})
</script>

<script lang="ts">
export default {
  name: 'StoryInfoItem'
}
</script>

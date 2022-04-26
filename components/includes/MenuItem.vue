<template>
  <li class="menu-item">
    <a
      class="pl-7 flex items-center text-theme-text hover:text-theme-text animate h-[56px] border-l-4"
      :class="{
        'border-primary-500 bg-primary-50': active,
        'border-transparent hover:bg-primary-50': !active
      }"
    >
      <svg
        width="24px"
        height="24px"
        fill="currentColor"
      >
        <use
          :xlink:href="icon"
        />
      </svg>
      <span class="text-[18px] ml-4">{{ label }}</span>
    </a>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

</script>

<script lang="ts">
export default {
  name: 'MenuItem'
}
</script>

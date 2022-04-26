<template>
  <div
    :id="$route.name"
    class="bg-primary-50 text-slate-900"
  >
    <icons-view />

    <div class="flex">
      <input id="sidebarInput" v-model="isOpen" type="checkbox" class="hidden">

      <side-bar class="w-[280px] sidebar animate" />

      <div class="w-full h-screen animate">
        <div class="h-[70px] w-full bg-white relative top-0 left-0 right-0 z-10 px-[32px] flex items-center">
          <a class="text-base hover:text-theme-text text-theme-text flex items-center">
            <svg class="fill-current" width="1em" height="1em">
              <use xlink:href="#i-back" />
            </svg>

            <span id="title" class="ml-3 text-lg">
              Tác Phẩm
            </span>

          </a>
        </div>

        <div id="page-body" class="px-[32px] pt-[32px] w-full">
          <div class="w-full h-full bg-white p-[32px]">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp, useState } from '#app'
import { watch } from '#imports'

const isOpen = useState('sidebarInput', () => false)

watch(isOpen, (value) => {
  const { $anime } = useNuxtApp()

  if (!value) {
    $anime({
      targets: '.sidebar',
      width: [64, 280],
      duration: 1200
    })
  } else {
    $anime({
      targets: '.sidebar',
      width: [280, 64],
      duration: 1200
    })
  }
})

</script>

<script lang="ts">
export default {
  name: 'DefaultLayout'
}
</script>
<style>
#page-body {
  height: calc(100vh - 70px);
}
</style>

<style>
#sidebarInput:checked + div > ul .menu-item span {
  display: none;
}
#sidebarInput:checked+div>ul .menu-item > a {
  padding-left: calc(4px + 12px);
}
#sidebarInput:checked+div> .logo {
  opacity: 0;
  transform: scale(0);
}
#sidebarInput:not(:checked) + div > ._show_btn {
  opacity: 0;
  transform: scale(0);
}
</style>

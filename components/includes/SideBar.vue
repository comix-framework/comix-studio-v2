<template>
  <div
    class="bg-white h-screen flex-shrink-0 relative z-20 py-4 flex flex-col"
    style="box-shadow: 2px 0 8px rgb(0 0 0 / 4%), 12px 0 24px rgb(64 64 64 / 4%);"
  >
    <label class="absolute right-5 top-6 cursor-pointer logo" for="sidebarInput">
      <svg width="18px" height="18px" fill="currentColor">
        <use xlink:href="#i-close" />
      </svg>
    </label>

    <label class="absolute left-[20px] top-6 cursor-pointer animate _show_btn" for="sidebarInput">
      <svg width="24px" height="24px" fill="currentColor">
        <use xlink:href="#i-menu" />
      </svg>
    </label>

    <a class="hover:text-theme-text w-[56px] h-[56px] left-8 absolute logo animate" href="javascript:void(0)">
      <h1>
        <svg width="56px" height="56px" fill="currentColor">
          <use xlink:href="#i-tagivi" />
        </svg>
      </h1>
    </a>

    <ul class="mt-20">
      <menu-item icon="#i-dashboard" label="Tổng Quan" to="/" />
      <menu-item :active="true" icon="#i-workspace" label="Tác Phẩm" to="/" />
      <menu-item icon="#i-assistants" label="Kiểm Duyệt" to="/" />
    </ul>

    <ul class="mt-14 mt-auto">
      <menu-item icon="#i-settings" label="Cài Đặt" to="/" />
      <menu-item icon="#i-logout" label="Đăng Xuất" to="/" />
    </ul>
  </div>
</template>

<script setup lang="ts">

</script>

<script>
export default {
  name: 'SideBar'
}
</script>

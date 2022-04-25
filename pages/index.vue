<template>
  <div class="w-full min-h-screen">
    <modal-auth />

    <div class="w-full h-full absolute blur-sm brightness-90" style="background-image: url('/images/slidebg.jpg')" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'AuthPage'
}
</script>

<script setup lang="ts"></script>

<style>
.modal-content {
  box-shadow: 0 8px 30px 0 rgb(0 0 0 / 20%);
}
</style>

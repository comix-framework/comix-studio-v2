<template>
  <div>
    <IconsView />
    <nuxt-page />
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'
import { onMounted, useNotify } from '#imports'
import { linkBuilder } from '~/graphql/link'
import { useUser } from '~/stores/user'

onMounted(() => {
  const userStore = useUser()

  if (userStore.auth) {
    const { $apollo } = useNuxtApp()
    $apollo.apolloClient.setLink(linkBuilder(true))

    const notifyStore = useNotify()
    notifyStore.startSub()
  }
})
</script>

<style>
.btn-effect {
  @apply flex items-center justify-center text-white shadow-md transition duration-300 ease-in-out hover:shadow bg-gradient-to-r from-primary-500 to-primary-700 rounded-full shadow-primary-300
}
.btn-text-size {
  @apply text-mini sm:text-semi-mini
}

.animate {
  @apply transition duration-300 ease-in-out
}
</style>

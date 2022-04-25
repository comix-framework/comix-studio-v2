<template>
  <div>
    <div :ref="(el) => refEl = el" @click="() => console.log(refEl)">
      ok
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, watch } from '#imports'

const refEl = ref()

watch(() => refEl.value, (el) => {
  console.log('el', el)
})

</script>

<script lang="ts">
export default {
  name: 'ModalTest'
}
</script>

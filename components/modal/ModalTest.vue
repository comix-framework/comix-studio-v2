<template>
  <div>
    <div @click="() => console.log(refEl)" :ref="(el) => refEl = el">ok</div>
  </div>
</template>

<script setup lang="ts">

import {ref, watch} from '#imports'

let refEl = ref()

watch(() => refEl.value, (el) => {
  console.log('el', el)
})

</script>

<script lang="ts">
export default {
  name: "ModalTest"
}
</script>

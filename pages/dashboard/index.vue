<template>
  <div>
    <!-- Charts -->
    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="10" class="mb-24">
        <!-- Active Users Card -->
        <CardBarChart />
        <!-- Active Users Card -->
      </a-col>
      <a-col :span="24" :lg="14" class="mb-24">
        <!-- Sales Overview Card -->
        <CardLineChart />
        <!-- / Sales Overview Card -->
      </a-col>
    </a-row>
    <!-- / Charts -->
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports'

definePageMeta({
  name: 'Dashboard'
})

</script>

<style>
#dashboard #page-body {
  height: auto;
}

#dashboard #page-body > div {
  background-color: transparent;
}
</style>

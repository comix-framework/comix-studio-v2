<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">
                <i class="fa fa-fw fa-dashboard" />
                Dashboard
              </h4>
            </div>
            <div class="card-body">
              <p>
                This is the dashboard page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { definePageMeta } from '#imports'

definePageMeta({
  name: 'Dashboard'
})

</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-4">{{ $t('welcome') }}</h1>
    <Integrating />
  </div>
</template>

<script setup lang="ts">
import Integrating from "@/components/Integrating.vue";
</script>
<style >
.gjs-block {
  width: auto !important;
  height: auto !important;
  min-height: auto !important;
}

</style>

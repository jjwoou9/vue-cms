<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-4">{{ $t('welcome') }}</h1>
    <CoPilotGrapes />
  </div>
</template>

<script setup lang="ts">
import CoPilotGrapes from "@/components/CoPilotGrapes.vue";
</script>
<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-4">{{ $t('welcome') }}</h1>
    <Editor2 />
  </div>
</template>

<script setup lang="ts">
import Editor2 from '../components/Editor2.vue'
</script>
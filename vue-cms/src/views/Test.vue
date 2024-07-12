<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-4">{{ $t('welcome') }}</h1>
    <Integrating />
  </div>
</template>

<script setup lang="ts">
import Editor2 from '../components/Editor2.vue'
import Grapes from "@/components/Grapes.vue";
import GptGrapes from "@/components/GptGrapes.vue";
import GrapesEditor from "@/components/GrapesEditor.vue";
import Integrating from "@/components/Integrating.vue";
</script>
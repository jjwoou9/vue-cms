<template>
  <div class="container">
    <div id="gjs"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs-mjml'

onMounted(() => {
  grapesjs.init({
    container: '#gjs',
    plugins: ['gjs-mjml']
  })
})
</script>

<style scoped src="grapesjs/dist/css/grapes.min.css">
/* global styles */
</style>
<template>
  <div ref="canvas"></div>
</template>

<script setup>
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import { ref, onMounted } from 'vue'

const canvas = ref(null);
let editor
onMounted(() => {
  editor = grapesjs.init({
    container: canvas.value,
    fromElement: true,
    storageManager: {
      type: 'local',
      autosave: true,
      autoload: true,
    },
    canvas: {
      styles: [],
      scripts: [],
    },
    plugins: ['gjs-preset-webpage'],
    pluginsOpts: {
      'gjs-preset-webpage': {},
    },
  });
});
</script>

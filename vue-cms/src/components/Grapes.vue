<template>
  <div class="gjs-editor-wrapper">
    <div id="gjs"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import grapesjs from 'grapesjs'
import gjsBlocksBasic from 'grapesjs-blocks-basic'

onMounted(() => {
  const editor = grapesjs.init({
    container: '#gjs',
    plugins: [gjsBlocksBasic],
    storageManager: false,
    panels: { defaults: [] },
    deviceManager: {
      devices: [
        {
          name: 'Desktop',
          width: '',
        },
        {
          name: 'Mobile',
          width: '320px',
          widthMedia: '480px',
        },
      ],
    },
    blockManager: {
      appendTo: '#blocks',
    },
    layerManager: {
      appendTo: '#layers-container',
    },
    styleManager: {
      appendTo: '#styles-container',
    },
    traitManager: {
      appendTo: '#traits-container',
    },
  })

  // Add some sample content
  editor.setComponents(`
    <div style="padding: 25px;">
      <h1 style="color: #3b3b3b;">Build your templates without coding</h1>
      <p>All text blocks could be edited easily with double clicking on it. You can create new text blocks with the command from the left panel.</p>
      <div style="margin-top: 20px; padding: 10px; background-color: #f1c40f; display: inline-block; cursor: pointer;">Hover me</div>
    </div>
  `)
})
</script>

<style>
@import 'grapesjs/dist/css/grapes.min.css';

.gjs-editor-wrapper {
  height: 100vh;
  width: 100%;
}

#gjs {
  border: 3px solid #444;
}

/* Custom styles to mimic the demo */
.gjs-one-bg {
  background-color: #2c3e50;
}

.gjs-two-color {
  color: #ecf0f1;
}

.gjs-three-bg {
  background-color: #3498db;
  color: white;
}

.gjs-four-color,
.gjs-four-color-h:hover {
  color: #2ecc71;
}

/* Panel styles */
.gjs-pn-panel {
  position: relative;
}

.gjs-pn-views {
  border-bottom: 1px solid #3b3b3b;
}

.gjs-pn-views-container {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.gjs-pn-btn {
  padding: 5px 10px;
  margin: 2px;
  border-radius: 2px;
}

/* Canvas styles */
.gjs-cv-canvas {
  width: 100%;
  height: calc(100% - 40px);
  top: 40px;
}

/* Blocks */
.gjs-block {
  width: auto;
  height: auto;
  min-height: auto;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #2c3e50;
}

::-webkit-scrollbar-thumb {
  background: #34495e;
}

::-webkit-scrollbar-thumb:hover {
  background: #3498db;
}
</style>
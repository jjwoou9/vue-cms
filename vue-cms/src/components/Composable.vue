<template>
  <div ref="canvas">
    <h1>Hello world!</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGrapes } from 'vue-grapesjs-composables'
import 'vue-grapesjs-composables/css/vue-grapes.css'

// Use ref to determine container for the canvas
const canvas = ref(null)

// Pass GrapesJS configuration object to useGrapes
const grapes = useGrapes({
  container: canvas,
  fromElement: true,
})
</script>
<template>
  <div ref="canvas">
    <h1>Hello world!</h1>
  </div>
</template>

<script setup>
import { useGrapes } from 'vue-grapesjs-composables'
import 'vue-grapesjs-composables/css/vue-grapes.css'
import {ref} from "vue";

// Use ref to determine container for the canvas
const canvas = ref(null)

// Pass GrapesJS configuration object to useGrapes
const grapes = useGrapes({
  container: canvas,
  fromElement: true,
})
</script>
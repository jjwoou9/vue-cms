<template>
  <div class="container" ref="container">
    <div id="gjs"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-mjml";

export default {
  name: "HelloWorld",
  setup() {
    const msg = ref('Welcome to Your Vue.js App');
    const container = ref(null);

    onMounted(() => {
      grapesjs.init({
        container: '#gjs',
        plugins: [ 'gjs-mjml' ]
      });
    });

    return { msg, container };
  }
};
</script>

<style scoped src="grapesjs/dist/css/grapes.min.css">
  /* global styles */
</style>
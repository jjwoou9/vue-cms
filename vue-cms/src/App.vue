<template>
  <router-view >
    <Home/>
    <HelloWord/>
  </router-view> 
</template>

<script lang="ts">
import Home from './views/Home.vue'
import HelloWord from './components/HelloWord.vue'

export default {
  components: {
    Home,
    HelloWord
  }
}

</script>


<style></style>

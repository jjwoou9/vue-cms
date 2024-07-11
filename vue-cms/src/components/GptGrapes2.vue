<template>
  <div ref="editorContainer" class="editor-container"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import '@/assets/grapes.css';

export default defineComponent({
  name: 'Editor',
  setup() {
    const editorContainer = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      if (editorContainer.value) {
        grapesjs.init({
          container: editorContainer.value,
          fromElement: true,
          width: 'auto',
          height: '100%',
          // 옵션은 필요에 따라 추가
        });
      }
    });

    return {
      editorContainer
    };
  }
});
</script>

<style scoped>
/* Editor.vue에만 적용할 스타일 추가 */
.editor-container {
  border: 3px solid #444;
  height: 100vh;
}
</style>

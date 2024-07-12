<template>
  <div ref="editorContainer" class="editor-container"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import grapesjs from 'grapesjs';

export default defineComponent({
  name: 'Editor',
  setup() {
    const editorContainer = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      const editor = grapesjs.init({
        container: editorContainer.value,
        fromElement: true,
        width: 'auto',
        height: '100vh',
        panels: { defaults: [] }, // 패널을 초기화합니다.
      });

      // 기본으로 전체 화면으로 설정
      const pnm = editor.Panels;
      const cmdm = editor.Commands;
      cmdm.run('core:fullscreen');

      // 패널을 추가하여 기본 툴바 버튼들을 설정합니다.
      pnm.addPanel({
        id: 'options',
        buttons: [
          {
            id: 'fullscreen',
            command: 'core:fullscreen',
            attributes: { title: 'Fullscreen' },
            className: 'fa fa-arrows-alt',
          },
          {
            id: 'export',
            command: 'export-template',
            attributes: { title: 'View Code' },
            className: 'fa fa-code',
          },
        ],
      });

      pnm.addPanel({
        id: 'views',
        buttons: [
          {
            id: 'open-blocks',
            command: 'open-blocks',
            active: true,
            className: 'fa fa-th-large',
          },
          {
            id: 'open-styles',
            command: 'open-styles',
            className: 'fa fa-paint-brush',
          },
          {
            id: 'open-layers',
            command: 'open-layers',
            className: 'fa fa-bars',
          },
          {
            id: 'open-traits',
            command: 'open-traits',
            className: 'fa fa-cog',
          },
        ],
      });

      editor.Panels.getButton('options', 'fullscreen').set('active', 0);
    });

    return {
      editorContainer,
    };
  },
});
</script>

<style scoped>
.editor-container {
  border: 3px solid #444;
  height: 100vh;
}
</style>

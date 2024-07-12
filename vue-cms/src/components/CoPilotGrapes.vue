<template>
  <div ref="grapesjsEditor"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
// GrapesJS 플러그인들을 임포트합니다.
import pluginBlocksBasic from 'grapesjs-blocks-basic';
import pluginComponentCountdown from 'grapesjs-component-countdown';
import pluginCustomCode from 'grapesjs-custom-code';
// import pluginLorySlider from 'grapesjs-lory-slider';
import pluginMjml from 'grapesjs-mjml';
import pluginNavbar from 'grapesjs-navbar';
import pluginParserPostcss from 'grapesjs-parser-postcss';
import pluginPresetWebpage from 'grapesjs-preset-webpage';
import pluginStyleBg from 'grapesjs-style-bg';
// import pluginTabs from 'grapesjs-tabs';
import pluginTooltip from 'grapesjs-tooltip';
import pluginTuiImageEditor from 'grapesjs-tui-image-editor';

export default defineComponent({
  name: 'GrapesJsEditor',
  setup() {
    const grapesjsEditor = ref(null);

    onMounted(() => {
      if (grapesjsEditor.value) {
        const editor = grapesjs.init({
          container: grapesjsEditor.value,
          fromElement: true,
          plugins: [
            pluginBlocksBasic,
            pluginComponentCountdown,
            pluginCustomCode,
            pluginMjml,
            pluginNavbar,
            pluginParserPostcss,
            pluginPresetWebpage,
            pluginStyleBg,
            pluginTooltip,
            pluginTuiImageEditor,
            // 여기에 추가적인 GrapesJS 플러그인 초기화 코드를 작성합니다.
          ],
          storageManager: false,
          // 각 플러그인의 옵션을 설정할 수 있습니다.
          pluginsOpts: {
            'grapesjs-blocks-basic': {},
            'grapesjs-component-countdown': {},
            'grapesjs-custom-code': {},
            'grapesjs-lory-slider': {},
            'grapesjs-mjml': {},
            'grapesjs-navbar': {},
            'grapesjs-parser-postcss': {},
            'grapesjs-preset-webpage': {},
            'grapesjs-style-bg': {},
            'grapesjs-tabs': {},
            'grapesjs-tooltip': {},
            'grapesjs-tui-image-editor': {},
            // 각 플러그인에 대한 추가적인 옵션 설정
          },
          blockManager: {
            appendTo: '#blocks',
            blocks: [
              {
                id: 'section', // id is mandatory
                label: '<b>Section</b>', // You can use HTML/SVG inside labels
                attributes: { class: 'gjs-block-section' },
                content: `<section>
                <h1>This is a simple title</h1>
                <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
              </section>`,
              },
              {
                id: 'text',
                label: 'Text',
                content: '<div data-gjs-type="text">Insert your text here</div>',
              },
              {
                id: 'image',
                label: 'Image',
                select: true,
                content: { type: 'image' },
                activate: true,
              },
            ],
          },

        });
        // 여기에 추가적인 GrapesJS 초기화 코드를 작성합니다.
      }
    });

    return {
      grapesjsEditor,
    };
  },
});
</script>

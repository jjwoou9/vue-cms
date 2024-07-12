<template>
  <div id="gjs"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage/dist/index.js';
import '@/assets/grapes.min.css';
import '@/grapes.min.js';
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

onMounted(() => {
  grapesjs.init({
    container: '#gjs',
    height: '900px',
    width: '100%',
    plugins: [
      pluginBlocksBasic,
      pluginComponentCountdown,
      pluginCustomCode,
      // pluginLorySlider,
      pluginMjml,
      pluginNavbar,
      pluginParserPostcss,
      pluginPresetWebpage,
      pluginStyleBg,
      // pluginTabs,
      pluginTooltip,
      pluginTuiImageEditor,
      // 여기에 추가적인 GrapesJS 플러그인 초기화 코드를 작성합니다.
    ],
    storageManager: false,
    deviceManager: {
      devices: [
        {
          id: 'desktop',
          name: 'Desktop',
          width: '',
        },
        {
          id: 'tablet',
          name: 'Tablet',
          width: '768px',
          widthMedia: '992px',
        },
        {
          id: 'mobilePortrait',
          name: 'Mobile portrait',
          width: '320px',
          widthMedia: '575px',
        },
      ]
    },
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
    }
  });
});
</script>

<style>
</style>
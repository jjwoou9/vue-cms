<template>
  <div id="editor"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

export default defineComponent({
  name: 'GrapesEditor',
  setup() {
    onMounted(() => {
      grapesjs.init({
        container: '#editor',
        fromElement: true,
        width: 'auto',
        height: '100vh',
        storageManager: {
          type: 'local',
          autosave: true,
          autoload: true,
          stepsBeforeSave: 1,
        },
        panels: {
          defaults: [
            {
              id: 'panel-top',
              el: '.panel__top',
              buttons: {
                append: [
                  {
                    id: 'visibility',
                    active: true, // active by default
                    className: 'btn-toggle-borders',
                    label: '<u>B</u>',
                    command: 'sw-visibility', // Built-in command
                  },
                  {
                    id: 'export',
                    className: 'btn-open-export',
                    label: 'Exp',
                    command: 'export-template',
                  },
                  {
                    id: 'show-json',
                    className: 'btn-show-json',
                    label: 'JSON',
                    command(editor) {
                      editor.Modal.setTitle('Components JSON')
                          .setContent(`<textarea style="width:100%; height: 250px;">${JSON.stringify(
                              editor.getComponents()
                          )}</textarea>`)
                          .open();
                    },
                  },
                ],
              },
            },
            {
              id: 'basic-actions',
              el: '.panel__basic-actions',
              buttons: [
                {
                  id: 'undo',
                  className: 'fa fa-undo icon-undo',
                  command: 'core:undo',
                  attributes: { title: 'Undo (CTRL/CMD + Z)' },
                },
                {
                  id: 'redo',
                  className: 'fa fa-repeat icon-redo',
                  command: 'core:redo',
                  attributes: { title: 'Redo (CTRL/CMD + SHIFT + Z)' },
                },
              ],
            },
          ],
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
    });

    return {};
  },
});
</script>

<style scoped>
#editor {
  border: 1px solid #ddd;
  height: 100%;
}
</style>

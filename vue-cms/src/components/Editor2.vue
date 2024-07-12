<template>
  <div class="panel__top">
    <div class="panel__basic-actions"></div>
    <div class="panel__devices"></div>
    <div class="panel__switcher"></div>
  </div>

  <div class="editor-row">
    <div class="editor-canvas">
      <div id="gjs">...</div>
    </div>
    <div class="panel__right">
      <div class="layers-container"></div>
      <div class="styles-container"></div>
      <div class="traits-container"></div>
    </div>
  </div>
  <div id="blocks"></div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

type EditorType = any; // Replace 'any' with actual Editor Class/Type.
type SenderType = any; // Replace 'any' with actual Sender Class/Type.

onMounted(() => {
  const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: '300px',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: {
      type: 'local', // Type of the storage, available: 'local' | 'remote'
      autosave: true, // Store data automatically
      autoload: true, // Autoload stored data on init
      stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
      options: {
        local: { // Options for the `local` type
          key: 'gjsProject', // The key for the local storage
        },
      }
    },
    // Avoid any default panel
    blockManager: {
      appendTo: '#blocks',
      blocks: [
        {
          id: 'section', // id is mandatory
          label: '<b>Section</b>', // You can use HTML/SVG inside labels
          attributes: {class: 'gjs-block-section'},
          content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
        }, {
          id: 'text',
          label: 'Text',
          content: '<div data-gjs-type="text">Insert your text here</div>',
        }, {
          id: 'image',
          label: 'Image',
          // Select the component once it's dropped
          select: true,
          // You can pass components as a JSON instead of a simple HTML string,
          // in this case we also use a defined component type `image`
          content: {type: 'image'},
          // This triggers `active` event on dropped components and the `image`
          // reacts by opening the AssetManager
          activate: true,
        }
      ]
    },
    layerManager: {
      appendTo: '.layers-container'
    },
    deviceManager: {
      devices: [{
        name: 'Desktop',
        width: '', // default size
      }, {
        name: 'Mobile',
        width: '320px', // this value will be used on canvas width
        widthMedia: '480px', // this value will be used in CSS @media
      }]
    },
    // We define a default panel as a sidebar to contain layers
    panels: {
      defaults: [
        {
          id: 'layers',
          el: '.panel__right',
          // Make the panel resizable
          resizable: {
            maxDim: 350,
            minDim: 200,
            tc: 0, // Top handler
            cl: 1, // Left handler
            cr: 0, // Right handler
            bc: 0, // Bottom handler
            // Being a flex child we need to change `flex-basis` property
            // instead of the `width` (default)
            keyWidth: 'flex-basis',
          },
        },
        {
          id: 'panel-switcher',
          el: '.panel__switcher',
          buttons: [{
            id: 'show-layers',
            active: true,
            label: 'Layers',
            command: 'show-layers',
            // Once activated disable the possibility to turn it off
            togglable: false,
          }, {
            id: 'show-style',
            active: true,
            label: 'Styles',
            command: 'show-styles',
            togglable: false,
          }, {
            id: 'show-traits',
            active: true,
            label: 'Traits',
            command: 'show-traits',
            togglable: false,
          }
          ],
        },
        {
          id: 'panel-devices',
          el: '.panel__devices',
          buttons: [{
            id: 'device-desktop',
            label: 'D',
            command: 'set-device-desktop',
            active: true,
            togglable: false,
          }, {
            id: 'device-mobile',
            label: 'M',
            command: 'set-device-mobile',
            togglable: false,
          }],
        }
      ]
    },
    selectorManager: {
      appendTo: '.styles-container'
    },
    styleManager: {
      appendTo: '.styles-container',
      sectors: [{
        name: 'Dimension',
        open: false,
        // Use built-in properties
        buildProps: ['width', 'min-height', 'padding'],
        // Use `properties` to define/override single property
        properties: [
          {
            // Type of the input,
            // options: integer | radio | select | color | slider | file | composite | stack
            type: 'integer',
            name: 'The width', // Label for the property
            property: 'width', // CSS property (if buildProps contains it will be extended)
            units: ['px', '%'], // Units, available only for 'integer' types
            defaults: 'auto', // Default value
            min: 0, // Min value, available only for 'integer' types
          }
        ]
      },{
        name: 'Extra',
        open: false,
        buildProps: ['background-color', 'box-shadow', 'custom-prop'],
        properties: [
          {
            id: 'custom-prop',
            name: 'Custom Label',
            property: 'font-size',
            type: 'select',
            defaults: '32px',
            // List of options, available only for 'select' and 'radio'  types
            options: [
              { value: '12px', name: 'Tiny' },
              { value: '18px', name: 'Medium' },
              { value: '32px', name: 'Big' },
            ],
          }
        ]
      }]
    },
    traitManager: {
      appendTo: '.traits-container',
    },
  });

  editor.BlockManager.add('blocks', {
    label: 'Ori',
    category: 'BAASIC',
    content: {
      tagName: 'div',
      draggable: true,
      attributes: {'some-attribute': 'some-value'},
      components: [
        {
          tagName: 'span',
          content: '<b>Some static content</b>',
        }, {
          tagName: 'div',
          // use `content` for static strings, `components` string will be parsed
          // and transformed in Components
          components: '<span>HTML at some point</span>',
        }
      ]
    }
  });

  editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
  });
  editor.Panels.addPanel({
    id: 'basic-actions',
    el: '.panel__basic-actions',
    buttons: [
      {
        id: 'visibility',
        active: true, // active by default
        className: 'btn-toggle-borders',
        label: '<u>B</u>',
        command: 'sw-visibility', // Built-in command
      }, {
        id: 'export',
        className: 'btn-open-export',
        label: 'Exp',
        command: 'export-template',
        context: 'export-template', // For grouping context of buttons from the same panel
      }, {
        id: 'show-json',
        className: 'btn-show-json',
        label: 'JSON',
        context: 'show-json',
        command(editor: any) {
          editor.Modal.setTitle('Components JSON')
              .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
              .open();
        },
      }
    ],
  });

  editor.on('run:export-template:before', (opts: any) => {
    console.log('Before the command run');
    if (0 /* some condition */) {
      opts.abort = 1;
    }
  });
  editor.on('run:export-template', () => console.log('After the command run'));
  editor.on('abort:export-template', () => console.log('Command aborted'));

// Define commands
  editor.Commands.add('show-layers', {
    getRowEl(editor: EditorType): Element | null {
      return editor.getContainer().closest('.editor-row');
    },
    getLayersEl(row: Element | null): Element | null {
      return row ? row.querySelector('.layers-container') : null;
    },
    run(editor: EditorType) {
      const rowEl = this.getRowEl(editor);
      const lmEl = this.getLayersEl(rowEl);
      if (lmEl) {
        lmEl.style.display = '';
      }
    },
    stop(editor: EditorType) {
      const rowEl = this.getRowEl(editor);
      const lmEl = this.getLayersEl(rowEl);
      if (lmEl) {
        lmEl.style.display = 'none';
      }
    },
  });

  editor.Commands.add('show-styles', {
    getRowEl(editor: EditorType): Element | null {
      return editor.getContainer().closest('.editor-row');
    },
    getStyleEl(row: Element | null): Element | null {
      return row ? row.querySelector('.styles-container') : null;
    },
    run(editor: EditorType) {
      const rowEl = this.getRowEl(editor);
      const smEl = this.getStyleEl(rowEl);
      if (smEl) {
        smEl.style.display = '';
      }
    },
    stop(editor: EditorType) {
      const rowEl = this.getRowEl(editor);
      const smEl = this.getStyleEl(rowEl);
      if (smEl) {
        smEl.style.display = 'none';
      }
    },
  });

  editor.Commands.add('show-traits', {
    getTraitsEl(editor: EditorType): Element | null {
      const row = editor.getContainer().closest('.editor-row');
      return row ? row.querySelector('.traits-container') : null;
    },

    run(editor: EditorType) {
      const traitsEl = this.getTraitsEl(editor);
      if (traitsEl) {
        traitsEl.style.display = '';
      }
    },

    stop(editor: EditorType) {
      const traitsEl = this.getTraitsEl(editor);
      if (traitsEl) {
        traitsEl.style.display = 'none';
      }
    },
  });


  // Commands
  editor.Commands.add('set-device-desktop', {
    run: (editor: EditorType) => editor.setDevice('Desktop')
  });
  editor.Commands.add('set-device-mobile', {
    run: (editor: EditorType) => editor.setDevice('Mobile')
  });
  //Device 변경 console
  editor.on('change:device', () => console.log('Current device: ', editor.getDevice()));

})

</script>

<style scoped>
/* global styles */
#gjs {
  border: 3px solid #444;
}

/* Reset some default styling */
.gjs-cv-canvas {
  top: 0;
  width: 100%;
  height: 100%;
}


.panel__top {
  padding: 0;
  width: 100%;
  display: flex;
  position: initial;
/* justify-content: center; */
  justify-content: space-between;
}

.panel__basic-actions {
  position: initial;
}

.editor-row {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  height: 300px;
}

.panel__switcher {
  position: initial;
}

.editor-canvas {
  flex-grow: 1;
}

.panel__right {
  flex-basis: 230px;
  position: relative;
  overflow-y: auto;
}

.panel__devices {
  position: initial;
}

#gjs {
  border: none;
}
/* Theming */

</style>

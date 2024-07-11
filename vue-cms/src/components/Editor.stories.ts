import Editor from './Editor.vue'

export default {
    title: 'Components/Editor',
    component: Editor,
}

export const Default = () => ({
    components: { Editor },
    template: '<Editor />'
})
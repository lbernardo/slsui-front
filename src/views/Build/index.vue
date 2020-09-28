<template src="./index.html" />
<script>
import {mapState} from "vuex";
import editor from 'vue2-ace-editor';
export default {
    name:"Build",
    components: {
        editor,
    },
    computed: mapState({
        yaml: state => state.yaml
    }),
    methods: {
        editorInit() {
            require('brace/mode/yaml')
            require('brace/theme/chrome')
        }
    }
}
</script>
<style scoped>
textarea {
    width: 100%;
}
</style>
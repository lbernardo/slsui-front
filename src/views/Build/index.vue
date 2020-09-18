<template src="./index.html" />
<script>
import {mapState} from "vuex";
export default {
    name:"Build",
    computed: mapState({
        yaml: state => state.yaml
    }),
}
</script>
<style scoped>
textarea {
    width: 100%;
}
</style>
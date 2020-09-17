<template src="./index.html" />
<script>
import Button from '@/components/Button';
import {mapState} from 'vuex';
export default {
    name: "Dynamodb",
    computed: mapState({
        databases: state => state.dynamodb.databases
    }),
    components: {
        Button
    },
    methods: {
        addDatabase() {
            this.$router.push({"name": "AddDynamodb"});
        },
        removeDatabase(index) {
            if (window.confirm("Are you sure?")) {
                this.$store.dispatch("dynamodb/removeDatabase", index);
            }
        }
    }
}
</script>
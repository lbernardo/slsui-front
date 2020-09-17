<template src="./index.html" />
<script>
import Button from '@/components/Button';
import {mapState} from 'vuex';
export default {
    name: "SQS",
    computed: mapState({
        queues: state => state.sqs.queues
    }),
    components: {
        Button
    },
    methods: {
        addDatabase() {
            this.$router.push({"name": "AddSQS"});
        },
        removeQueue(index) {
            if (window.confirm("Are you sure?")) {
                this.$store.dispatch("sqs/removeQueue", index);
            }
        }
    }
}
</script>
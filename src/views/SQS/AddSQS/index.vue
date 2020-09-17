<template src="./index.html" />
<script>
export default {
    name: "AddSQS",
    data: () => ({
        edit: -1,
        form: {
            "name" : "",
            "queueName" : "",
        }
    }),
    mounted() {
        if (this.$route.params.id != undefined) {
           const data = this.$store.state.sqs.queues[this.$route.params.id];          
           if (data != undefined) {
            this.form = data;
            this.edit = this.$route.params.id;
           }
        }
    },
    methods: {
        addQueue(e) {
            e.preventDefault();
            if (this.edit == -1) {
                this.$store.dispatch("sqs/addQueue", this.form);
                this.$router.push({"name": "SQS"});
                return;
            }
            this.$store.dispatch("sqs/editQueue",{
                index: this.edit,
                data: this.form
            });
            this.$router.push({"name": "SQS"});
        }
    }
}
</script>
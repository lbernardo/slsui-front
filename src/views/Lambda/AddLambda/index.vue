<template src="./index.html" />
<script>
import Button from "@/components/Button";
export default {
    name: "AddLambda",
    components: {
        Button
    },
    data: () => ({
        edit: -1,
        form: {
            event: "apigateway",
            name: "",
            handler: "",
            apigateway: {
                method: null,
                path: "",
            },
            s3: {
                bucket: "",
                permission: null,
            },
            schedule: {
                type: "rate",
                rateNum: 1,
                ratePeriod: "hours",
                cronPeriod: "0 12 * * ? *"
            },
            sqs: {
                value: "arn:aws:sqs:region:XXXXXX:Example"
            }
        },
        events: [
            {"text" : "Api Gateway", "value" : "apigateway"},
            {"text": "S3", "value" : "s3"},
            {"text": "Schedule", "value": "schedule"},
            {"text": "SQS", "value": "sqs"},
        ],
        methods: [
            {"text": "POST", "value": "POST"},
            {"text": "GET", "value": "GET"},
            {"text": "PUT", "value": "PUT"},
            {"text": "PATCH", "value": "PATCH"},
            {"text": "DELETE", "value": "DELETE"}
        ],
        s3permissions: [
            {"text" : "s3:ObjectCreated:*", "value": "s3:ObjectCreated:*"},
            {"text": "s3:ObjectRemoved:*", "value": "s3:ObjectRemoved:*"},
            {"text": "s3:ObjectRestore:Completed", "value": "s3:ObjectRestore:Completed"},
        ],
        scheduleTypes: [
            {"text": "rate(minutes/hours/days)", "value": "rate"},
            {"text": "cron(* * * * * *)", "value": "cron"},
        ],
        periods: [
            {"text" : "days", "value": "days"},
            {"text": "minutes", "value": "minutes"},
            {"text": "hours", "value": "hours"}
        ]
    }),
    mounted() {
        if (this.$route.params.id != undefined) {
           const data = this.$store.state.lambda.functions[this.$route.params.id];          
           if (data != undefined) {
            this.form = data;
            this.edit = this.$route.params.id;
           }
        }
    },
    methods: {
        addLambda(e) {
            e.preventDefault();
            if (this.edit == -1) {
                this.$store.dispatch("lambda/addFunction", this.form);
                this.$router.push("/lambda");
                return;
            }

            this.$store.dispatch("lambda/editFunction",{
                index: this.edit,
                data: this.form
            });
            this.$router.push("/lambda");
        }
    }
}
</script>
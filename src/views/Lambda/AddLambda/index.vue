<template src="./index.html" />
<script>
import Button from "@/components/Button";
export default {
    name: "AddLambda",
    components: {
        Button
    },
    data: () => ({
        form: {
            event: null,
            name: "",
            handler: "",
            apigateway: {
                method: null,
                path: "",
            }
        },
        events: [
            {"text" : "Api Gateway", "value" : "apigateway"},
            {"text": "S3", "value" : "s3"},
            {"text": "Schedule", "value": "schedule"},
            {"text": "SNS", "value": "sns"},
            {"text": "SQS", "value": "sqs"},
        ],
        methods: [
            {"text": "POST", "value": "POST"},
            {"text": "GET", "value": "GET"},
            {"text": "PUT", "value": "PUT"},
            {"text": "PATCH", "value": "PATCH"},
            {"text": "DELETE", "value": "DELETE"}
        ]
    })
}
</script>
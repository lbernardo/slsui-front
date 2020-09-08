<template src="./index.html" />
<script>
export default {
    name: "AddLambda",
    data: () => ({
        form: {
            event: null
        },
        events: [
            {"text" : "Api Gateway", "value" : "apigateway"},
            {"text": "S3", "value" : "s3"},
            {"text": "Schedule", "value": "schedule"},
            {"text": "SNS", "value": "sns"},
            {"text": "SQS", "value": "sqs"},
        ]
    })
}
</script>
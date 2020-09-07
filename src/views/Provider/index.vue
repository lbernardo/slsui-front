<template src="./index.html" />

<script type="text/javascript">
import {mapState} from "vuex";
export default {
    name: "Provider",
    computed: {
        ...mapState({
            form : state => state.provider
        })
    },
    data: () =>({
        runtimes: [
            {"text": "Node.js 12", "value": "nodejs12.x"},
            {"text": "Node.js 10", "value": "nodejs10.x"},
            {"text": "Python 3.8", "value": "python3.8"},
            {"text": "Python 3.7", "value": "python3.7"},
            {"text": "Python 3.6", "value": "python3.6"},
            {"text": "Python 2.7", "value": "python2.7"},
            {"text": "Ruby 2.7", "value": "ruby2.7"},
            {"text": "Ruby 2.5", "value": "ruby2.5"},
            {"text": "Java 11", "value": "java11"},
            {"text": "Java 8 (al2)", "value": "java8.al2"},
            {"text": "Java 8", "value": "java8"},
            {"text": "Go", "value": "go1.x"},
            {"text": ".NET Core 3.1", "value": "dotnetcore3.1"},
            {"text": ".NET Core 2.1", "value": "dotnetcore2.1"},
        ],
        regions: [
            {"value": "us-east-1", "text": "us-east-1"},
            {"value": "us-east-2", "text":"us-east-2"},
            {"value":"us-west-1", "text":"us-west-1"},
            {"value": "us-west-2", "text":"us-west-2"},
            {"value": "af-south-1", "text": "af-south-1"},
            {"value": "ap-east-1", "text": "ap-east-1"},
            {"value": "ap-south-1", "text": "ap-south-1"},
            {"value": "ap-northeast-3", "text": "ap-northeast-3"},
            {"value": "ap-northeast-2", "text": "ap-northeast-2"},
            {"value": "ap-southeast-1", "text": "ap-southeast-1"},
            {"value": "ap-southeast-2", "text": "ap-southeast-2"},
            {"value": "ap-northeast-1", "text": "ap-northeast-1"},
            {"value": "ca-central-1", "text": "ca-central-1"},
            {"value": "cn-north-1", "text": "cn-north-1"},
            {"value": "cn-northwest-1", "text": "cn-northwest-1"},
            {"value": "eu-central-1", "text": "eu-central-1"},
            {"value": "eu-west-1", "text": "eu-west-1"},
            {"value": "eu-west-2", "text": "eu-west-2"},
            {"value": "eu-south-1", "text": "eu-south-1"},
            {"value": "eu-west-3", "text": "eu-west-3"},
            {"value": "eu-north-1", "text": "eu-north-1"},
            {"value": "me-south-1", "text": "me-south-1"},
            {"value": "sa-east-1", "text": "sa-east-1"},
        ]
    }),
    methods: {
        saveProvider(e) {
            e.preventDefault();
            
        }
    }
}
</script>

<style scoped>
.field {
    margin-bottom: 10px;
}
label {
    display: block;
}
</style>

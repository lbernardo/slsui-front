<template src="./index.html" />

<script type="text/javascript">
export default {
    name: "Provider",
    data: () =>({
        form : {
            runtime : null,
            name: "",
            region: "us-east-1"
        },
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
    })
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

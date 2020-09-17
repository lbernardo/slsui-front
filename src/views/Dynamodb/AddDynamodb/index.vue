<template src="./index.html" />
<script>
export default {
    name: "AddDynamodb",
    data: () => ({
        edit: -1,
        optionsAttributeTypes: [
            {"text": "String", "value": "S"},
            {"text": "Number", "value": "N"},
            {"text": "Binary", "value": "B"}
        ],
        optionsKeySchemaTypes: [
            {"text": "HASH", "value":"HASH"},
            {"text":"RANGE", "value": "RANGE"}
        ],
        form: {
            "name" : "",
            "tableName" : "",
            "attributeDefinition" : {
                "attributeName" : "",
                "attributeType" : "S"
            },
            "keySchema": {
                "attributeName": "",
                "keyType": "HASH"
            },
            "throughput" : {
                "readCapacityUnits" : 1,
                "writeCapacityUnits": 1,
            }
        }
    }),
    mounted() {
        if (this.$route.params.id != undefined) {
           const data = this.$store.state.dynamodb.databases[this.$route.params.id];          
           if (data != undefined) {
            this.form = data;
            this.edit = this.$route.params.id;
           }
        }
    },
    methods: {
        addDatabase(e) {
            e.preventDefault();
            if (this.edit == -1) {
                this.$store.dispatch("dynamodb/addDatabase", this.form);
                this.$router.push({"name": "Dynamodb"});
                return;
            }
            this.$store.dispatch("dynamodb/editDatabase",{
                index: this.edit,
                data: this.form
            });
            this.$router.push({"name": "Dynamodb"});
        }
    }
}
</script>
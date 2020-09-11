<template src="./index.html" />
<script>
import {mapState} from 'vuex';
import Button from '@/components/Button';
export default {
  name: "Lambda",
  components: {
      Button,
      
  },
  computed: mapState({
          functions: state => state.lambda.functions
      }),
  methods: {
      addLambda() {
          this.$router.push('/lambda/add');
      },
      getEvent(fn) {
          switch (fn.event) {
              case "apigateway":
                  return `<label class="ui label mini blue" title="Api Gateway">${fn.apigateway.method} ${fn.apigateway.path}</label>`
              case "s3":
                  return `<label class="ui label mini orange" title="S3">${fn.s3.permission} ${fn.s3.bucket}</label>`
              case "schedule":
                  return `<label class="ui label mini pink" title="Schedule">${fn.schedule.type} ${fn.schedule.type == 'cron' ? fn.schedule.cronPeriod : fn.schedule.rateNum+ ' '+fn.schedule.ratePeriod}</label>` 
                case "sqs":
                    return `<label class="ui label mini green" title="SQS">${fn.sqs.value}</label>`
          }
      },
      removeLambda(index) {
          if (window.confirm("Você tem certeza que deseja excluir esta função?")) {
              this.$store.dispatch("lambda/removeFunction", index);
          }
      }
  }
};
</script>
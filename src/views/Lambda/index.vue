<template src="./index.html" />
<script>
import Button from '@/components/Button';
export default {
  name: "Lambda",
  components: {
      Button
  },
  methods: {
      addLambda() {
          this.$router.push('/lambda/add');
      }
  }
};
</script>
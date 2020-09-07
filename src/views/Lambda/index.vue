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
          console.log("adicionar lambda");
      }
  }
};
</script>
<template src="./index.html" />
<script>
import Button from '@/components/Button';
export default {
  name: "Lambda",
  components: {
      Button
  },
  data: () => ({
      add: false,
  }),
  computed: {
      active: function() {
          return this.add ? 'block' : 'none';
      }
  },
  methods: {
      toggleForm() {
          this.add =  !this.add;
      }
  }
};
</script>
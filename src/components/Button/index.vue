<template>
  <button @click="$emit('click')" class="btn btn-primary">
    <slot />
  </button>
</template>
<script>
export default {
  name: "Button",
};
</script>
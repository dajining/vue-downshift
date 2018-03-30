<template>
  <label
    :for="htmlFor"
    class="input-label"
  >
    {{ label }}
  </label>
</template>

<script>
  export default {
    props: {
      htmlFor: { type: String },
      label: { type: String },
    },
  }
</script>

<style scoped>
  .input-label {
    color: grey;
    font-size: 12px;
  }
</style>

<template>
  <input
    :name="name"
    :placeholder="placeholder"
    :type="type"
    :value="value"
    @blur="$emit('blur', $event)"
    @focus="$emit('focus', $event)"
    @input="updateValue"
    class="input-field"
  >
</template>

<script>
  export default {
    props: {
      value: {},
      label: { type: String },
      name: { type: String, require: true },
      type: { type: String, default: 'text' },
      placeholder: { type: String }
    },

    methods: {
      updateValue (e) {
        this.$emit('input', e.target.value)
        this.$emit('change', e.target.value)
      },
    },
  }
</script>

<style scoped>
  .input-field {
    font-size: 16px;
    line-height: 36px;
    height: 36px;
    padding: 4px;
    width: 100%;
    box-sizing: border-box;
  }
  .input-field:focus {
    outline: none;
  }
</style>

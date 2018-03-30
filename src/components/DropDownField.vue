<template>
  <div
    class="drop-down-field"
  >
    <input-field
      :id="id"
      :label="label"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      type="text"
      @change="handleChange"
    />

    <div
      class="drop-down-area"
      v-show="open && list.length"
    >
      <ul
        class="drop-down-list"
      >
        <li
          class="drop-down-item"
          v-for="(item, i) in list"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import pokemon from 'pokemon'
  import InputField from './InputField.vue'

  const pokemonData = pokemon.all()

  export default {
    components: {
      InputField,
    },

    props: {
      id: { type: String },
      label: { type: String },
      name: { type: String, require: true },
      placeholder: { type: String },
      value: {},
    },

    data: () => ({
      open: false,
      list: [],
    }),

    methods: {
      handleChange (value) {
        this.$emit('change', value)
        if (value.length > 0) {
          this.open = true
          this.list = pokemonData.filter((name) => name.match(value))
        } else {
          this.open = false
          this.list = []
        }
      },
    },
  }
</script>

<style scoped>
  .drop-down-field {
    display: flex;
    flex-direction: column;
  }

  .drop-down-area {
    border: 1px solid rgba(0, 0, 0, .1);
    box-shadow: 5px 5px rgba(0, 0, 0, .07);
    height: 100px;
    overflow: scroll;
    width: 100%;
  }
</style>

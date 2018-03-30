import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text, select, boolean } from '@storybook/addon-knobs/vue'

import Autocomplete from 'vue2-autocomplete-js'
import InputField from '../components/InputField.vue'

storiesOf('vue-downshift', module)
  .add('Downshift', () => ({
    components: { Autocomplete },
    template: `
      <autocomplete
        :anchor="anchor"
        :on-select="getData"
        :url="url"
        :label="label"
      />
    `,
    data: () => ({
      anchor: text('anchor', 'anchor'),
      label: text('label', 'label'),
      url: text('url', 'https://jsonplaceholder.typicode.com/posts'),
    }),
    methods: {
      getData: action('getData'),
    },
  }))

  .add('InputField', () => ({
    components: { InputField },
    template: `
      <input-field
        :id="id"
        :label="label"
        :name="name"
        :placeholder="placeholder"
        :type="type"
        :value="value"
        @change="handleChange"
      />
    `,
    data: () => ({
      id: text('id', 'id'),
      label: text('label', 'label'),
      name: text('name', 'name'),
      placeholder: text('placeholder', 'placeholder'),
      type: select('type', ['text', 'number', 'range'], 'text'),
      value: text('value', 'value'),
    }),
    methods: {
      handleChange: action('changed'),
    },
  }))

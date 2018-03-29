import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs/vue'

import Autocomplete from 'vue2-autocomplete-js'

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

import * as storybook from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue'
import * as vueInfo from 'storybook-addon-vue-info'

vueInfo.setDefaults({
  header: false,
})

storybook.addDecorator(withKnobs)

storybook.configure(
  () => {
    require('./../src/stories')
  },
  module
)

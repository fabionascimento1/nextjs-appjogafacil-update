import FormSignup from '.'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Form/FormSignup',
  component: FormSignup
} as Meta

export const Component = (args) => <FormSignup {...args} />

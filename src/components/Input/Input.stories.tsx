import Input from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { InputProps } from './types'

export default {
  title: 'Form/Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<InputProps> = (args) => <Input {...args} />

export const WithIcon: Story<InputProps> = (args) => <Input {...args} />

WithIcon.args = {
  type: 'password',
  placeholder: 'Digite',
  icon: '/img/icon_pass.svg'
}

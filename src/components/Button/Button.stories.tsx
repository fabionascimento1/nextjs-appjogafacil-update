import Button from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ButtonProps } from './types'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Button'
}

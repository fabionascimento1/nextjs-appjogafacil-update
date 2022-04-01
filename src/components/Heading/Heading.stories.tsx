import Heading from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { HeadingProps } from './types'

export default {
  title: 'Components/Heading',
  component: Heading
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Heading'
}

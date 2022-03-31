import Header from '.'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default = (args) => <Header {...args} />

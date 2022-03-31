import NavigationButton from '.'
import { Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Components/NavigationButton',
  component: NavigationButton,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default = (args) => <NavigationButton {...args} />

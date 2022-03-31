import Banner from '.'
import { Meta, Story } from '@storybook/react/types-6-0'
import { BannerProps } from './types'

export default {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

Default.args = {
  title: 'Facilitar a locação de horários de quadras esportivas',
  description:
    'Mudou de cidade? Encontre polos esportivos, times e peladas perto de você e <strong>saia para o abraço</strong>.',
  image: '/img/player-1.svg'
}

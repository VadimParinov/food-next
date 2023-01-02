import { Story, Meta } from '@storybook/react'
import { Banner, BannerProps } from './banner'

export default {
  title: './src/shared/ui/Banner',
  component: Banner,
} as Meta

const Template: Story<BannerProps> = args => <Banner {...args} />

export const Default = Template.bind({})
Default.args = {}

import { Story, Meta } from '@storybook/react'
import { ChangeLanguageButton } from './change-language-button'

export default {
  title: 'Features/ChangeLanguageButton',
  component: ChangeLanguageButton,
} as Meta

const Template: Story = args => <ChangeLanguageButton {...args} />

export const Default = Template.bind({})
Default.args = {}

import { Story, Meta } from '@storybook/react'
import { NumberInput, NumberInputProps } from './number-input'

export default {
  title: './src/shared/ui/NumberInput',
  component: NumberInput,
} as Meta

const Template: Story<NumberInputProps> = args => <NumberInput {...args} />

export const Default = Template.bind({})
Default.args = {}

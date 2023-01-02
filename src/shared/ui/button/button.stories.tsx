import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from './button'
import Arrow from '@/shared/assets/icons/common/arrow.svg'

export default {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'inverse', 'inverse-outlined', 'icon'],
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['S', 'L', 'M'],
      defaultValue: 'L',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args}></Button>

export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
  size: 'L',
  children: 'Кнопка',
}

export const Icon = Template.bind({})
Icon.args = {
  variant: 'icon',
  size: 'L',
  children: <Arrow className='w-4 h-4' />,
}

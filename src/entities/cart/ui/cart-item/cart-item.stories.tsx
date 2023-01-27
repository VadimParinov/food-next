import { Story, Meta } from '@storybook/react'
import { CartItem, CartItemProps } from './cart-item'

export default {
  title: './src/entities/cart/ui/CartItem',
  component: CartItem,
} as Meta

const Template: Story<CartItemProps> = args => <CartItem {...args} />

export const Default = Template.bind({})
Default.args = {}

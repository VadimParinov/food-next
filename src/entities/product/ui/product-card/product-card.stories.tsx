import { Story, Meta } from '@storybook/react'
import { ProductCard, ProductCardProps } from './product-card'

export default {
  title: 'Entities/Product/ProductCard',
  component: ProductCard,
} as Meta

const Template: Story<ProductCardProps> = args => <ProductCard {...args} />

export const Default = Template.bind({})
Default.args = {}

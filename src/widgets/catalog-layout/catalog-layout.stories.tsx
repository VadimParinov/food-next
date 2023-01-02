import { Story, Meta } from '@storybook/react'
import { CatalogLayout, CatalogLayoutProps } from './catalog-layout'

export default {
  title: 'Widgets/CatalogLayout',
  component: CatalogLayout,
} as Meta

const Template: Story<CatalogLayoutProps> = args => <CatalogLayout {...args} />

export const Default = Template.bind({})
Default.args = {}

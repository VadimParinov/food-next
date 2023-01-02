import { Story, Meta } from '@storybook/react'
import { CatalogPopover, CatalogPopoverProps } from './catalog-popover'

export default {
  title: './src/shared/ui/CatalogPopover',
  component: CatalogPopover,
} as Meta

const Template: Story<CatalogPopoverProps> = args => <CatalogPopover {...args} />

export const Default = Template.bind({})
Default.args = {}

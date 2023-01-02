import { render } from '@/jest/utils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './catalog-popover.stories'

const { Default } = composeStories(stories)

describe('CatalogPopover Tests', () => {
  it('CatalogPopover should be render', () => {
    const component = render(<Default />)
    expect(component.container).toBeInTheDocument()
  })
})

import { render } from '@/jest/utils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './catalog-layout.stories'

const { Default } = composeStories(stories)

describe('CatalogLayout Tests', () => {
  it('CatalogLayout should be render', () => {
    const component = render(<Default />)
    expect(component.container).toBeInTheDocument()
  })
})

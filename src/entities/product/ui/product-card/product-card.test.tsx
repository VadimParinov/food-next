import { render } from '@/jest/utils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './product-card.stories'

const { Default } = composeStories(stories)

describe('ProductCard Tests', () => {
  it('ProductCard should be render', () => {
    const component = render(<Default />)
    expect(component.container).toBeInTheDocument()
  })
})

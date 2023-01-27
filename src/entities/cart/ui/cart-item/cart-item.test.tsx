import { render } from '@/jest/utils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './cart-item.stories'

const { Default } = composeStories(stories)

describe('CartItem Tests', () => {
  it('CartItem should be render', () => {
    const component = render(<Default />)
    expect(component.container).toBeInTheDocument()
  })
})

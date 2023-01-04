import { render } from '@/jest/utils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './number-input.stories'

const { Default } = composeStories(stories)

describe('NumberInput Tests', () => {
  it('NumberInput should be render', () => {
    const component = render(<Default />)
    expect(component.container).toBeInTheDocument()
  })
})

import { render } from '@/jest/utils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './banner.stories'

const { Default } = composeStories(stories)

describe('Banner Tests', () => {
  it('Banner should be render', () => {
    const component = render(<Default />)
    expect(component.container).toBeInTheDocument()
  })
})

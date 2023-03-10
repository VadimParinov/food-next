import { render, RenderResult } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './sorting.stories'

const { Default } = composeStories(stories)

describe('SortingTests', () => {
  let component = {} as RenderResult

  beforeEach(() => {
    component = render(<Default />)
  })

  it('component should be render', () => {
    expect(component.container).toBeInTheDocument()
  })
})

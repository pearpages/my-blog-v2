---
slug: react-testing-library-example
title: React testing-libary example
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [react, testing-library]
---

I am omitting the component because I want to focus in the test itself.

```js
import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { ServerValidation } from './ServerValidation'

describe('<ServerValidation>', () => {
  test('if no translation key present no message gets rendered', () => {
    const renderContext = render(<ServerValidation translationKey="" unmountCallback={() => undefined}/>)
    expect(renderContext.queryByTestId('ErrorWrapper')).toBeNull()
  })
  test('if translation key does not start with `validators` then it is a "common.unknownError"', () => {
    const renderContext = render(<ServerValidation translationKey="any.random.key" unmountCallback={() => undefined}/>)
    const errorElement = renderContext.queryByTestId('ErrorWrapper')
    expect(errorElement).not.toBeNull()
    expect(errorElement.textContent).toBe('Sorry, there has been a temporary error which means you can\'t perform this action right now. Please try again.')
  })
  test('if translation key does start with `validators` then it should render the right message"', () => {
    const renderContext = render(<ServerValidation translationKey="validators.required" unmountCallback={() => undefined}/>)
    const errorElement = renderContext.queryByTestId('ErrorWrapper')
    expect(errorElement).not.toBeNull()
    expect(errorElement.textContent).toBe('This field is required.')
  })
  test('when the component gets destroyed a unmountCallback should be called', async (done) => {
    const callback = jest.fn()
    const renderContext = render(<ServerValidation translationKey="validators.required" unmountCallback={callback}/>)
    renderContext.unmount()
    await waitFor(() => expect(callback).toHaveBeenCalled())
    done()
  })
})
```

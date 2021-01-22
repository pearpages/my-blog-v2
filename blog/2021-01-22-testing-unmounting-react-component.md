---
slug: testing-a-react-component-when-unmounting-with-testing-library
title: Testing a React component when unmounting with testing-library
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [react, testing-library]
---

## The Component

```js {9}
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { I18n } from 'react-redux-i18n'

import { ErrorWrapper } from './ErrorWrapper'

export function ServerErrorMessage ({ message, clearServerSideValidation }) {

  useEffect(() => clearServerSideValidation, [clearServerSideValidation])

  return message
    ? (<ErrorWrapper>
      {message.startsWith('validators.') ? I18n.t(message) : I18n.t('common.unknownError')}
    </ErrorWrapper>)
    : null

}

ServerErrorMessage.propTypes = {
  message: PropTypes.string,
  clearServerSideValidation: PropTypes.func

}

ServerErrorMessage.defaultProps = {
  message: ''
}
```

## The test (with Jest and testing-library)

```js {2,19}
import React from 'react'
import { render, waitFor } from '@testing-library/react'

import { ServerErrorMessage } from './ServerErrorMessage'

const STANDARD_TRANSLATED_ERROR_MESSAGE = "Sorry, there has been a temporary error which means you can't perform this action right now. Please try again."

describe('<ServerErrorMessage>', () => {
  describe('message cannot be found in the translations', () => {
    const spy = jest.fn()
    const renderContext = render(<ServerErrorMessage message={'this message cannot be found in the translations'} clearServerSideValidation={spy} />)
    const alert = renderContext.getByRole('alert')

    test('we display the STANDARED_TRANSLATED_ERROR_MESSAGE', () => {
      expect(alert.textContent).toBe(STANDARD_TRANSLATED_ERROR_MESSAGE)
    })

    test('we call the clearFunction when unmounting the component', async (done) => {
      renderContext.unmount()
      await waitFor(() => expect(spy).toHaveBeenCalled())
      done()
    })

  })

  describe('the message has a translation', () => {
    test('we call display the translation', () => {
      const knownTranslation = 'validators.url'
      const TRANSLATION = 'Absolute URLs must start with https://.'
      const renderContext = render(<ServerErrorMessage message={knownTranslation} clearServerSideValidation={jest.fn()} />)
      const alert = renderContext.getByRole('alert')
      expect(alert.textContent).toBe(TRANSLATION)
    })

  })
})
```

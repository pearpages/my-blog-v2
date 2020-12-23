---
slug: es6-object-destructuring-default-parameters
title: ES6 Object Destructuring Default Parameters
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, ES6, destructuring]
---

```js
(function test({a = "foo", b = "bar"} = {}) {
  console.log(a + " " + b);
})();
```

```jsx
import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

function renderComponent ({
  initialValues = {
    pageName: '',
    pageId: '',
    translations: {'ca-ES': '', 'en-GB': '', 'es-ES': ''},
    syntaxErrors: {'ca-ES': false, 'en-GB': false, 'es-ES': false}
  },
  updateContent,
  saveContent,
  store = mockStore({})
} = {}) {
  return render(<Provider store={store}><PageContentForm
    serverValidationMessages={{}}
    mainDomain={'www.sit.cabun.do/content/'}
    initialValues={initialValues}
    languages={['en-GB', 'ca-ES', 'es-ES']}
    updateContent={updateContent}
    saveContent={saveContent}
    deleteRequested={() => undefined}
  /></Provider>)
}
```

## Resources

- [ES6 Object Destructuring Default Parameters](https://stackoverflow.com/questions/26578167/es6-object-destructuring-default-parameters)

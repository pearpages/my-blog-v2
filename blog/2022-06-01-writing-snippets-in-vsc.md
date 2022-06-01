---
slug: writing-snippets-in-vsc
title: Writing snippets in vsc
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, javascript, ts, typescript]
---

## Creating or Editing the snippets

In order to create or edit snippets go to preferences:

![snippets shortcut](./2022-06-01-writing-snippets-in-vsc/snippets.png)

I chose to edit the most generic file so I can reuse the snippet between `.js, .jsx, .ts, .tsx`.

![file shortcut](./2022-06-01-writing-snippets-in-vsc/file.png)

```json
{
   "mock useDispatch with spyOn": {
    "prefix": "test-spyOn-useDispatch",
    "body": [
      "import * as reactRedux from 'react-redux';",
      "",
      "const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch')",
      "const mockedDispatch = jest.fn()",
      "useDispatchSpy.mockImplementation(() => mockedDispatch)"
    ],
    "description": "mock use dispatch with spyOn"
  },
}
```

```jsx
import * as reactRedux from 'react-redux';

const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch')
const mockedDispatch = jest.fn()
useDispatchSpy.mockImplementation(() => mockedDispatch)
```

## Using the snippets

Start typing and use `tab` and `autocomplete`.

![test shortcut](./2022-06-01-writing-snippets-in-vsc/test.png)

##  Official docs

[https://code.visualstudio.com/docs/editor/userdefinedsnippets#:~:text=You%20can%20search%20for%20extensions,new%20snippets%20will%20be%20available.](https://code.visualstudio.com/docs/editor/userdefinedsnippets#:~:text=You%20can%20search%20for%20extensions,new%20snippets%20will%20be%20available.)
---
slug: snippets-in-visual-studio-code
title: Snippets in Visual Studio Code
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [vsc]
---

> Code snippets are templates that make it easier to enter repeating code patterns, such as loops or conditional-statements.

:::note
There is also support for tab-completion: Enable it with `"editor.tabCompletion": "on"`.
:::

## Install snippets from the Marketplace

You can search for extensions that contains snippets in the **Extensions view** using the `@category:"snippets"` filter.

## Create your own snippets

```js
// in file 'Code/User/snippets/javascript.json'
{
  "For Loop": {
    "prefix": ["for", "for-const"],
    "body": ["for (const ${2:element} of ${1:array}) {", "\t$0", "}"],
    "description": "A for loop."
  }
}
```

In the example above:

- "For Loop" is the snippet name. It is displayed via IntelliSense if no `description` is provided.
- `prefix` defines one or more trigger words that display the snippet in IntelliSense. Substring matching is performed on prefixes, so in this case, "fc" could match "for-const".
- `body` is one or more lines of content, which will be joined as multiple lines upon insertion. Newlines and embedded tabs will be formatted according to the context in which the snippet is inserted.
- `description` is an optional description of the snippet displayed by IntelliSense.

Additionally, the `body` of the example above has three placeholders (listed in order of traversal): `${1:array}`, `${2:element}`, and `$0`. You can quickly jump to the next placeholder with Tab, at which point you may edit the placeholder or jump again the next one. The string after the colon (if any) is the default text, for example `element` in `${2:element}`. Placeholder traversal order is ascending by number, starting from one; zero is an optional special case that always comes last, and exits snippet mode with the cursor at the specified position.

:::info
Check resoursces sectionn for: _Tabstops, Placeholders, Choice, Variables, Variable transforms..._
:::

## Resources

[Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
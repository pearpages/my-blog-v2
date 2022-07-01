---
slug: specify-the-required-node-js-version-in-package-json
title: Specify the required node js version in package.json
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, javascript, ts, typescript]
---

- [Original Resource](https://stackoverflow.com/questions/29349684/how-can-i-specify-the-required-node-js-version-in-package-json)

In the `package.json` file add the section **engines**:

```json
"engines" : { 
    "npm" : ">=7.0.0",
    "node" : ">=16.0.0"
  }
```

To enforce this via npm you need to create an `.npmrc` file (and commit it to the repository) and set the engines-strict option to **true**, which will cause npm commands such as `npm install` to fail if the required engine versions to not match:

```sh
# .npmrc
engine-strict=true
```

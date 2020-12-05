---
slug: yup-validation-with-file-type-and-size
title:  Yup validation with file type and size
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, formik, yup]
---

## Resources

- [https://github.com/formium/formik/issues/926](https://github.com/formium/formik/issues/926)
- [Formik — Handling files and reCaptcha](https://hackernoon.com/formik-handling-files-and-recaptcha-209cbeae10bc)
- [Sandbox Example](https://codesandbox.io/s/4wrrx8qok0)

## Example

The trick is to use **mixed** schema to be able to access the file object.

```js
const FILE_SIZE = 160 * 1024
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

const iconFileSchema = Yup.mixed()
  .test('fileSize', 'File size is too large', value => value.size <= FILE_SIZE)
  .test('fileType', 'Unsupported File Format', value => SUPPORTED_FORMATS.includes(value.type))
```

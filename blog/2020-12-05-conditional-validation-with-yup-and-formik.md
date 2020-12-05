---
slug: conditional-validation-with-yup-and-formik
title:  Conditional validation with Yup and Formik
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, formik, yup]
---

[https://stackoverflow.com/questions/54919228/conditional-validation-with-yup-and-formik](https://stackoverflow.com/questions/54919228/conditional-validation-with-yup-and-formik)

The trick for doing conditional validation is to be part of a bigger validation schema.

```js
const validationSchema = Yup.object()
  .shape({
    isCompany: Yup.boolean()
    companyName: Yup.string()
  })
```

We want to conditionally validate **companyName** using **isCompany** value.

```js
const validationSchema = Yup.object()
  .shape({
    isCompany: Yup.boolean()
    companyName: Yup.string()
      .when('isCompany', {
        is: true, // it can also be a 'function', e.g. function (isCompany) { return assertion }
        then: Yup.string().required('Field is required'),
        otherwise: Yup.string()
      })
  })
```

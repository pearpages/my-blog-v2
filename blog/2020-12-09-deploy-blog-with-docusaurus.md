---
slug: deploy-blog-with-docusaurus
title: Deploy blog with Docusaurus
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, blog, docusaurus, github]
draft: true
---

## Resources

- [Deployment](https://v2.docusaurus.io/docs/deployment/)
- [Create a robots.txt](https://developers.google.com/search/docs/advanced/robots/create-robots-txt?authuser=2&authuser=2&hl=es&visit_id=637430180302633807-3952330285&rd=1)

## Testing build local

```
npm run build
```

```
npm run serve
```

or altogether

```
npm run serve --build --port 80 --host 0.0.0.0
```

## `docusaurus.config.js`

```js
module.exports = {
  url: "https://pages.ninja",
  baseUrl: "/",
  organizationName: "pearpages", // Usually your GitHub org/user name.
  projectName: "my-blog", // Usually your repo name.
};
```

## Using a custom domain

In case you want to use your custom domain for GitHub Pages, create a `CNAME` file in the **static** directory.

> Anything within the static directory will be copied to the root of the build directory for deployment.

At this point you can also think of adding a **[robots.txt](https://developers.google.com/search/docs/advanced/robots/create-robots-txt?authuser=2&authuser=2&hl=es&visit_id=637430180302633807-3952330285&rd=1)** file.

:::warning

By default, GitHub Pages runs published files through _Jekyll_. Since _Jekyll_ will discard any files that begin with ```_```, it is recommended that you disable _Jekyll_ by adding an empty file named ```.nojekyll``` file to your ```static``` directory. **This is done by default**.

:::

```
User-agent: * 
Disallow: /
```

## deploy

```
GIT_USER=pearpages npm run deploy
```

## Edit links to your repo

```js
{
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/pearpages/my-blog/edit/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/pearpages/my-blog/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
```

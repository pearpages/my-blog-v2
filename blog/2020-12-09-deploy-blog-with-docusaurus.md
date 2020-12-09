---
slug: deploy-blog-with-docusaurus
title: Deploy blog with Docusaurus
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js, blog, docusaurus, github]
---

## Resources

- [Deployment](https://v2.docusaurus.io/docs/deployment/)
- [Create a robots.txt](https://developers.google.com/search/docs/advanced/robots/create-robots-txt?authuser=2&authuser=2&hl=es&visit_id=637430180302633807-3952330285&rd=1)
- [Generating a new SSH key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

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

```
# CNAME
pearpages.ninja
```

> Anything within the static directory will be copied to the root of the build directory for deployment.

At this point you can also think of adding a **[robots.txt](https://developers.google.com/search/docs/advanced/robots/create-robots-txt?authuser=2&authuser=2&hl=es&visit_id=637430180302633807-3952330285&rd=1)** file.

:::info

By default, GitHub Pages runs published files through _Jekyll_. Since _Jekyll_ will discard any files that begin with ```_```, it is recommended that you disable _Jekyll_ by adding an empty file named ```.nojekyll``` file to your ```static``` directory. **This is done by default**.

:::

```
User-agent: * 
Disallow: /
```

## Configuring and apex domain (Using a DNS provider)

[GitHub Docs](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)

```
# the IPs are pointing now to GitHub
A	@	185.199.108.153	600 seconds
A	@	185.199.109.153	1 hour
A	@	185.199.110.153	1 hour
A	@	185.199.111.153	1 hour
# www.yourdomain.com and yourdomain.com point to the same place
CNAME	www	@	1 hour
```

Once your DNS provider points to **GitHub** you will be able to use ```https``` feature from GitHub.

## Manual deploy

It is going to publish to ```gh-pages``` using the current branch.

```
GIT_USER=pearpages npm run deploy
```

## Automatic deploy using github actions

[Generating a new SSH key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

1. Use a **SSH key** (an existing - but not used in GitHub - o create new one)
2. Paste it as a **deploy key**
  ```
  # public key
  pbcopy < ~/.ssh/key.pub
  ```
3. Paste the private key as **GitHub secret**. Using _name_ **GH_PAGES_DEPLOY**
  ```
  # private key
  pbcopy < ~/.ssh/key
  ```
6. Create the **workflow** file in ```.github/workflows/publishing.yml```
  ```yml
  name: publishing

  on:
    pull_request:
      branches: [master]
    push:
      branches: [master]

  jobs:
    checks:
      if: github.event_name != 'push'
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v1
        - uses: actions/setup-node@v1
          with:
            node-version: '12.x'
        - name: Test Build
          run: |
            if [ -e yarn.lock ]; then
            yarn install --frozen-lockfile
            elif [ -e package-lock.json ]; then
            npm ci
            else
            npm i
            fi
            npm run build
    gh-release:
      if: github.event_name != 'pull_request'
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v1
        - uses: actions/setup-node@v1
          with:
            node-version: '12.x'
        - name: Add key to allow access to repository
          env:
            SSH_AUTH_SOCK: /tmp/ssh_agent.sock
          run: |
            mkdir -p ~/.ssh
            ssh-keyscan github.com >> ~/.ssh/known_hosts
            echo "${{ secrets.GH_PAGES_DEPLOY }}" > ~/.ssh/id_rsa
            chmod 600 ~/.ssh/id_rsa
            cat <<EOT >> ~/.ssh/config
            Host github.com
            HostName github.com
            IdentityFile ~/.ssh/id_rsa
            EOT
        - name: Release to GitHub Pages
          env:
            USE_SSH: true
            GIT_USER: git
          run: |
            git config --global user.email "actions@gihub.com"
            git config --global user.name "gh-actions"
            if [ -e yarn.lock ]; then
            yarn install --frozen-lockfile
            elif [ -e package-lock.json ]; then
            npm ci
            else
            npm i
            fi
            npx docusaurus deploy
  ```

## Edit links pointing to your repo

This was you can publish directly from github web.

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

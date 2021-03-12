---
slug: npm-tricks
title: NPM tricks
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [npm]
---

![npm logo](https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg)

## Open a package’s homepage

```
npm home $package
```

## Open package’s GitHub repo

```
npm repo $package
```

## Check for outdated dependencies

```
npm outdated
```

## Check for packages not declared in package.json

When you run `prune`, the npm CLI will run through your `package.json` and compare it to your project’s `/node_modules` directory. It will print a list of modules that aren’t in your `package.json`.

```
npm prune
```

## Lock down your dependencies versions

```
npm shrinkwrap
```

Using `shrinkwrap` in your project generates an `npm-shrinkwrap.json` file. This allows you to pin the dependencies of your project to the specific version you’re currently using within your `node_modules` directory. When you run npm install and there is a npm-shrinkwrap.json present, it will override the listed dependencies and any semver ranges in `package.json`.

## Allow `npm install -g` without needing `sudo`

```
npm config set prefix $dir
```

After running the command, where `$dir` is the directory you want npm to _install your global modules_ to, you won’t need to use sudo to install modules globally anymore. The directory you use in the command becomes your global bin directory.

The only caveat: you will need to make sure you **adjust your user permissions** for that directory with `chown -R $USER $dir` and you add `$dir/bin` to your PATH.

## Change the default save prefix for all your projects

```
npm config set save-prefix="~"
```

The tilde (~) is more conservative than what npm defaults to, the caret (^), when installing a new package with the --save or --save-dev flags.

The tilde pins the dependency to the minor version, allowing patch releases to be installed with npm update. The caret pins the dependency to the major version, allowing minor releases to be installed with npm update.

## Check for more tricks

[11 Simple npm Tricks That Will Knock Your Wombat Socks Off](https://nodesource.com/blog/eleven-npm-tricks-that-will-knock-your-wombat-socks-off/)

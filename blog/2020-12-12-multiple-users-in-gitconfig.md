---
slug: multiple-users-in-gitconfig
title: Multiple users in gitconfig
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [git]
---

[Can I specify multiple users for myself in .gitconfig?
](https://stackoverflow.com/questions/4220416/can-i-specify-multiple-users-for-myself-in-gitconfig)

1. Configure an individual repo which overrides the global configuration
2. Use conditional includes

## 1. Configure an individual repo which overrides the global configuration

```
git config user.name "Your Name Here"
git config user.email your@email.com
```

Whereas the default user/email is configured in your ```~/.gitconfig```

```
git config --global user.name "Your Name Here"
git config --global user.email your@email.com
```

## 2. Use conditional includes

In the global config ```~/.gitconfig```

```
[user]
    name = John Doe
    email = john@doe.tld

[includeIf "gitdir:~/work/"]
    path = ~/work/.gitconfig
```

Work specific config ```~/work/.gitconfig```

```
[user]
    email = john.doe@company.tld
```

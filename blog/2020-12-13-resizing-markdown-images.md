---
slug: resizing-markdown-images
title: Resizing markdown images
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [markdown]
---

After many attempts I have come to the conclusion that the best way is doing through css. And the cleanest way is to use the ```alt``` attribute.

In the example I am using ```thumb``` and ```thumb autor``` to style the images.

```markdown
![thumb Javascript for Kids](../static/blog/2020/12/13/javascsript-for-kids.jpg)
&nbsp;
![thumb autor Nick Morgan](../static/blog/2020/12/13/nick-morgan.png)
```

And that is what we write in the .css

```css
img[alt^=thumb] {
  width: 100px;
}
img[alt^="thumb autor"] {
  width: 100px;
  border-radius: 50%;
}
```

---
slug: centralized-prop-types
title: Centralized PropTypes
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [prop-types]
---

> PropTypes provide type warnings at runtime

```js
const { shape, number, string, oneOf } = PropTypes;

UserDetails.propTypes = {
 user: shape({
   id: number.isRequired,
   firstName: string.isRequired,
   lastName: string.isRequired,
   role: oneOf(['user','admin'])
};
```

```
/types/index.js
```

```js
// types/index.js
import { shape, number, string, oneOf } from 'prop-types';

export const userType = shape({
  id: number,
  firstName: string.isRequired,
  lastName: string.isRequired,
  company: string,
  role: oneOf(['user', 'author']),
  address: shape({
    id: number.isRequired,
    street: string.isRequired,
    street2: string,
    city: string.isRequired,
    state: string.isRequired,
    postal: number.isRequired
  });
});
```

[Centralize PropTypes](https://www.freecodecamp.org/news/react-pattern-centralized-proptypes-f981ff672f3b/)

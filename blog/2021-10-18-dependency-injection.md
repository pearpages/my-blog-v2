---
slug: dependency injection
title: Dependency Injection
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [js]
---

> DI is a pattern where, instead of creating or requiring dependencies directly inside a module, we pass them as parameters or reference.

> Program to an interface, not an implementation.

A second problem is the testability of this module. If we wanted to find out if getUsers method works, we would need to stub usersRepository using Sinon, Jest.mock or any other stubbing library.

```js
const User = require('./User');

function UsersService(usersRepository) {
  async function getUsers() {
    return usersRepository.findAll();
  }
  
  async function addUser(userData) {
    const user = new User(userData);
  
    return usersRepository.addUser(user);
  }
  
  return {
    getUsers,
    addUser
  };
}

module.exports = UsersService
```

```js
const UsersService = require('./users');
const assert = require('assert');

describe('Users service', () => {
  it('gets users', async () => {
    const users = [{
      id: 1,
      firstname: 'Joe',
      lastname: 'Doe'
    }];

    const usersRepository = {
      findAll: async () => {
        return users
      }
    };

    const usersService = new UsersService(usersRepository);
  
    assert.deepEqual(await usersService.getUsers(), users);
  });
});
```

## Functional Version (with Typescript)

```ts
type UsersDependencies = {
  usersRepository: UsersRepository
  mailer: Mailer
  logger: Logger
};

export const usersService = (dependencies: UsersDependencies) => {
  const findAll = () => dependencies.usersRepository.findAll();
  const addUser = user => {
    await dependencies.usersRepository.addUser(user)
    dependencies.logger.info(`User created: ${user}`)
    await dependencies.mailer.sendConfirmationLink(user)
    dependencies.logger.info(`Confirmation link sent: ${user}`)
  };

  return {
    findAll,
    addUser
  };
}

const service = usersService({
  usersRepository,
  mailer,
  logger
});
```

## Resources

[Original Post](https://tsh.io/blog/dependency-injection-in-node-js/)

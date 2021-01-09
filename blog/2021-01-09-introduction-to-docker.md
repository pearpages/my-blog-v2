---
slug: introduction-to-docker
title: Introduction to Docker
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [web, docker]
---

Rather than installing dependencies on your PC, you run them in lightweight isolated VM-like environments known as _containers_.

Development benefits include:

- all developers can use the same Docker containers on Mac, Linux, and Windows
- installation, configuration, maintenance, and testing of applications becomes easier
- applications run in virtual environment isolated from your development PC
- multiple versions of the same application or runtime can be used on the same PC at the same time, e.g. PHP 5.6, 7.0, 7.4 etc.
- developers retain all the benefits of local development and can experiment without risk.

Similar Docker environments can also be deployed in production:

- continuous integration and delivery processes can be simplified for rapid deployment
- performance can be improved with horizontal scaling. It’s possible to add more application containers to cope with increased traffic.
- services are more robust. If a container fails, it can be automatically restarted with zero downtime.
- applications can be secured. Containers can be configured to communicate only with each other and not the outside world.

Your Docker environment:

- works without an active/fast internet connection (useful when travelling, during demonstrations, etc.)
- permits experimentation without risk. No one will mind if you accidentally wipe your local MySQL database.
- is free from cost and usage restrictions.

> Docker can be used to replicate that environment so all dependencies are available on your development PC.

## Serverless web applications

Docker can be used in development environments to:

1. run build processes such as JavaScript module bundling and Sass preprocessing
2. serve the web application, and
3. emulate infrastructures for serverless function testing.

## Static sites

A static site is constructed using a build process which places content (markdown files, JSON data, database fields, etc.) _into templates to create folders of static HTML, CSS, JavaScript, and media files_. Those pre-rendered files can be deployed anywhere: _no server-side runtime or database is required_.

Static sites are often referred to as the **JAMstack(JavaScript, APIs, and Markdown)**. All content is pre-rendered where possible, but dynamic services such as a site search can adopt server-based APIs.

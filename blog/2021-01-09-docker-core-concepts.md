---
slug: docker-core-concepts
title: Docker core concepts
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [web, docker]
---

## TL;DR

- Docker runs an application such as MySQL in a singlecontainer.
- Your web application will probably require several containers
  - your code (and runtime)
  - a database
  - a web server, etc.
- A container is launched from an image.
- Containers start in clean (image) state so data is not permanently stored.
- Containers are isolated from the host and other containers.
- Each container is started with a single Docker command.
- Optionally, **orchestration** tools such as _Docker Swarm_ and _Kubernetes_ can be used for container management and replication on production systems.

## Containers

It helps to think of a container as a mini VM with its own operating system, libraries, and application files.

> Docker emulates an Operating System so you can run isolated applications within their own file system. Docker therefore uses fewer host OS resources than a VM.

**You should therefore use separate containers for your application, the database, and any other dependencies you require.**

> **Containers are isolated** Each running container is available at localhost or 127.0.0.1 , but a TCP port must be exposed to use it, e.g.

> **Containers are stateless and disposable** Data written to the container’s file system is lost the moment it is shuts down! Docker offers volumes and host folder bind mounts.

> **Containers run on Linux** It doesn’t matter what host OS you’re using:Docker containers run natively on Linux. For that reason, Windows and macOS run Docker containers inside a Linux VM!

## Images

A Docker image is a snapshot of a file and operating system with libraries and application executables. In essence, an image is a _recipe or template_ for creating a container. (In a similar way that some computer languages let you define a reusable class template for instantiating objects of the same type.)

Any number of containers can be started from a single image. This permits **scaling** on production servers, although you’re unlikely to launch multiple containers from the same image during development.

The **Docker Hub** provides a repository of common images for popular applications such asNGINX,MySQL,MongoDB,Elasticsearch,redisand more.

### Dockerfile

- OS
- work directories and **user permissions**
- environment variables, copying files from host, running install processes, etc.
- volumes for data storage
- network configuration and **ports** exposed to ```localhost```
- launch command

## Volumes

Some containers – such as databases – absolutely must retain data so Docker provides two storage mechanism types:

1. Volumes: a Docker-managed file system, and
2. Bind mounts: a file or directory on the host machine.

> **Volumes** are the recommended way to persist data. In some cases, it’s the only option – for example, MongoDB does not currently support bind mounts on Windows or macOS file systems.

## Networks

Docker creates a **virtual network** and assigns each running container a **unique IP address**. It’s then possible for one container to communicate with another using its address.

> An easier option is to create your own Docker virtual network. Any container added to that network can communicate with another using its **name**, i.e. _mysql:3306_ resolves to the correct address.

Container TCP/IP ports can be exposed:

1. within the virtual network only, or
2. within the virtual network and to the host.

## Docker Compose

An application requiring Node.js, NGINX, and MongoDB containers is started with three commands – possibly executed in three terminals in the correct order (probably MongoDB, then the Node.js application, then NGINX).

Docker Compose is a tool for managing multiple containers with associated volumes and networks. A single configuration file, normally named ```docker-compose.yml``` , defines the containers and can override Dockerfile settings where necessary.

> It’s practical to create a Docker Compose configuration for **development**. You could also create one for production, but there are **better options**…

## Orchestration

Containers are portable and reproducible. This allows you to scale a single application by launching identical containers on the same server, another server, or even a different data center on the other side of the world.

## Docker client-server application

The server is responsible for container management and is controlled via a REST API. The command-line interface communicates with this API, so it’s possible to run a server daemon anywhere and connect from another device.

> This rarely matters during development: the Docker server and CLI is installed on the same PC.

## When not to use Docker

1. Your application is not stateless
2. You are using a Windows Server
3. Performance is critical
4. Stability is important
5. To store mission-critical data
6. To improve security
7. To create GUI applications
8. Because Docker is cool

---
slug: mysql-with-docker
title: MySQL database with Docker
author: pere pages
# author_title: Docusaurus Core Team
# author_url: https://github.com/wgao19
author_image_url: https://avatars2.githubusercontent.com/u/3802915?s=400&v=4
tags: [web, docker]
---

## Installing an image

```bash
# latest
docker pull mysql
# or any version using semantic versioning
docker pull mysql:8.0.22
```

## Launching the container

All Docker CLI commands start with ```docker``` and an instruction such as ```run``` followed by options. ```docker run``` creates a container from a specified image ( ```mysql``` ) and starts it. That image is downloaded if it’s not already available on the host.

```bash
docker run \
  -it --rm --name mysql \
  -p 3306:3306 \
  --mount "src=mysqldata,target=/var/lib/mysql" \
  -e MYSQL_ROOT_PASSWORD=mysecret \
  mysql
```

The command runs the container in the foreground, removes it at the end, gives it a name of _mysql_ maps the port 3306 of the host to the 3306 of the container, mounts a volume with the name mysqldata and sets an environment variable called MSQL_ROOT_PASSWORD.

Once the database container has started, you can use any MySQL client application installed on your host PC to connect to ```localhost:3306``` with the user ID ```root``` and password ```mysecret```.

## Most used options

|option	|description|
|---|---|
|-d|run a container as a **background** process (which exits when the application ends)|
|-it|Interactive mode. It keeps a container running in the **foreground** (even after the application ends), and show an activity log|
|--rm|remove the container after it stops|
|--name|**name** a container (a random GUID is used otherwise)|
|-p|map a _host_ **port** to a _container_ port|
|--mount|create a **persistent** Docker-managed **volume** to retain data. The string specifies a src volume **name** and a **target** where it is mounted in the container’s file system|
|-v|mount a host **folder** using the notation ```<hostdir>:<containerdir>```|
|-e|define an **environment variable**|
|--env-file|read **environment variables from a file** where each line defines a VAR=value|
|--net|connect to specific **Docker network**|
|--entrypoint|overrides the default starting application|

> If you do not specify ```--rm``` , the container will remain available even once it has stopped. Although it is possible to restart it, there’s rarely any benefit – it’s simpler to execute the same ```docker run``` command again.

## Connect to the database using ```Adminer``` Mysql Client

If you don’t have a MySQL client to hand, **Adminer** is a lightweight PHP-based option. It is also available as a **Docker image** and can be launched in another terminal with:

```bash
docker run \
  -it --rm --name adminer \
  -p 8080:8080 \
  adminer
```

The image will be downloaded automatically, otherwise you can install it as shown previously.

Now you can type in the browser ```http://localhost:8080```.

Note that you **cannot** use ```localhost```as the server name since Adminer will resolve that to its own container! Instead these are the options:

1. Enter ```host.docker.internal```. Docker Desktop routes this domain to your PC's network IP address, but **it may not be available on all systems**.
2. Use your actual network IP address. This can be obtained with the ``ìfconfig``` command on macOS.
3. Or us the container's IP address assigned by Docker. Docker creates it's own virtual network. ```docker inspect mysql```returns information about the container in JS_ON format. You can locate the 'IPAddress' value suing the ```-f``` format option.

```bash
docker inspect \
  -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' \
  mysql
```

> Alternatively, you can define a Docker network which containers can connect to. Any container can then use the name of another container name and have it resolve correctly, i.e. you can enter ```mysql``` as the server name on the Adminer login screen.

## Connect to a container shell

Every Docker container runs an isolated Linux environment. You can connect to its shell to run commands, examine logs, or perform any other activities.

> Remember containers are stateless! Any changes you make will be lost whenever the container is restarted.

```bash
# Presuming your MySQL container is still running, open another terminal and enter
docker exec -it mysql bash
```

> Some lightweight images using **Alpine** Linux do not offer the ```bash``` shell. If this command fails, try using ```docker exec -it mysql sh``` instead.

```bash
mysql -u root -pmysecret
```

Enter ```exit``` to quit the shell.

## List, pause/unpause, stop and restart containers

### List

```bash
docker container ls
# or
docker ps
```

Each container is assigned a **hexadecimal ID** which can be used as a reference in Docker commands. However, specifying a container ```--name``` makes management considerably easier.

To view all containers, both running and stopped, enter:

```bash
docker container ls -a
```

### Restart

```bash
docker container restart adminer mysql
```

### Pause/Unpause

```bash
docker container pause mysql
```

```bash
docker container unpause mysal
```

### Stop

Containers which stared with the ```-rm``` option are removed when they are stopped. You can list all containers with ```docker ps -a```.

```bash
docker container stop adminer mysql
```

### Remove

```bash
docker container prune
```

## Define a Docker network

Generally it is easier to refer to another container using its ```--name```then its ```IP```.

Stop any running containers then create a new network, e.g. named ```mysqlnet``` here:

```bash
docker network create --driver bridge mysqlnet
```

Any container can connect to this network using the ```--net``` option when it is launched.

```bash {6}
docker run \
  -d --rm --name mysql \
  -p 3306:3306 \
  --mount "src=mysqldata,target=/var/lib/mysql" \
  -e MYSQL_ROOT_PASSWORD=mysecret \
  --net mysqlnet \
  mysql
```

```bash {4}
docker run \
  -d --rm --name adminer \
  -p 8080:8080 \
  --net mysqlnet \
  adminer
```

Each container’s name now resolves on the Docker ```mysqlnet``` network. You can therefore enter ```mysql``` as the server name on the Adminer login screen.

## Cleaning up

### Statistics

```bash
docker system df
```

### List containers, images, volmes and networks

```bash
docker container ls -a
```

```bash
docker image ls -a
```

```bash
docker volume ls
```

```bash
docker network ls
```

### Remove unused networks and images

```bash
docker system prune
```

The following command will do the same and also wipe any image not associated with a running container:

```bash
docker system prune -a
```

> The latest images will therefore have to be downloaded again if you require them.

### Deleting disk volumes

Assuming you’re happy to proceed, you can view Docker volumes with:

```bash
docker volume ls
````

then delete any by ID or name:

```bash
docker volume rm <name>
````

Unused Docker volumes –those not currently attached to a running container– can be removed with:

```bash
docker volume prune
```

Alternatively, use ```docker volume prune -a``` will delete them all. You only have yourself to blame!...

### Full clean start

```bash
docker system prune -a --volumes
```

Add ```-f``` if you want to force the wipe without a confirmation prompt.

## Launch multiple containers with Docker Compose

Docker Compose provides a way to build and launch containers, networks, and volumes from a single configuration file named ```docker-compose.yml```.

```yml {14,18,24}
version: '3'
services:
  mysql:
    image: mysql
    container_name: mysql
    environment:
      - MYSQL_ROOT_PASSWORD=mysecret
    volumes:
      - mysqldata:/var/lib/mysql
    ports:
      - "3306:3306"
    networks:
      - mysqlnet
    restart: on-failure
  adminer:
    image: adminer
    container_name: adminer
    depends_on:
      - mysql
    ports:
      - "8080:8080"
    networks:
      - mysqlnet
    restart: on-failure
volumes:
  mysqldata:
networks:
  mysqlnet:
```

Now launch Docker Compose from the same directory as your ```docker-compose.yml``` file using:

```bash
docker-compose up
```

### Running on the background

```bash
docker-compose up -d
```

### Stop

```bash
docker compose stop
```

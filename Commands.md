# 🐳 Docker Commands Cheat Sheet

> **Priority:** ⭐⭐⭐⭐⭐ = Must Know | ⭐⭐⭐⭐ = Important | ⭐⭐⭐ = Good to Know

---

# 📚 Table of Contents

- [1. Docker Information](#1-docker-information)
- [2. Docker Images](#2-docker-images)
- [3. Docker Containers](#3-docker-containers)
- [4. Container Management](#4-container-management)
- [5. Execute Commands Inside Container](#5-execute-commands-inside-container)
- [6. Docker Volumes](#6-docker-volumes)
- [7. Docker Networks](#7-docker-networks)
- [8. Docker Compose](#8-docker-compose)
- [9. Docker Hub](#9-docker-hub)
- [10. Docker System Commands](#10-docker-system-commands)
- [11. File Transfer](#11-file-transfer)
- [12. Monitoring](#12-monitoring)
- [13. Most Frequently Used Commands](#13-most-frequently-used-commands)

---

# 1. Docker Information ⭐⭐⭐⭐⭐

## Check Docker Version

```bash
docker --version
```

**Description:** Displays the installed Docker version.

---

## Display Docker Information

```bash
docker info
```

**Description:** Shows Docker Engine, Images, Containers, Networks, Volumes, Storage Driver, etc.

---

## Client & Server Version

```bash
docker version
```

**Description:** Shows Docker Client and Docker Server versions.

---

## Docker Help

```bash
docker --help
```

**Description:** Lists all Docker commands.

---

# 2. Docker Images ⭐⭐⭐⭐⭐

## Download an Image

```bash
docker pull nginx
```

---

## Search Images

```bash
docker search nginx
```

---

## List Images

```bash
docker images
```

or

```bash
docker image ls
```

---

## Remove an Image

```bash
docker rmi nginx
```

or

```bash
docker image rm nginx
```

---

## Build an Image

```bash
docker build -t myapp .
```

### Options

| Option | Meaning |
|---------|---------|
| `-t` | Assign a name (tag) to the image |

---

## Build Using Dockerfile

```bash
docker build -f Dockerfile -t myapp .
```

---

# 3. Docker Containers ⭐⭐⭐⭐⭐

## Create & Run Container

```bash
docker run nginx
```

---

## Run in Detached Mode

```bash
docker run -d nginx
```

---

## Run in Interactive Mode

```bash
docker run -it ubuntu bash
```

---

## Run with Port Mapping

```bash
docker run -p 8080:80 nginx
```

**Meaning**

```
Host (8080)
      │
      ▼
Container (80)
```

Open:

```
http://localhost:8080
```

---

## Run with Container Name

```bash
docker run --name mycontainer nginx
```

---

## Run with Volume

```bash
docker run -v myvolume:/app nginx
```

---

## Run with Bind Mount

### Windows

```bash
docker run -v C:\Project:/app nginx
```

### Linux

```bash
docker run -v /home/user/project:/app nginx
```

---

# 4. Container Management ⭐⭐⭐⭐⭐

## Running Containers

```bash
docker ps
```

---

## All Containers

```bash
docker ps -a
```

---

## Stop Container

```bash
docker stop <container_name>
```

---

## Start Container

```bash
docker start <container_name>
```

---

## Restart Container

```bash
docker restart <container_name>
```

---

## Kill Container

```bash
docker kill <container_name>
```

---

## Remove Container

```bash
docker rm <container_name>
```

---

## Remove All Stopped Containers

```bash
docker container prune
```

---

# 5. Execute Commands Inside Container ⭐⭐⭐⭐⭐

## Execute a Command

```bash
docker exec <container_name> ls
```

---

## Open Bash

```bash
docker exec -it <container_name> bash
```

If Bash is unavailable:

```bash
docker exec -it <container_name> sh
```

---

## View Logs

```bash
docker logs <container_name>
```

---

## Follow Logs

```bash
docker logs -f <container_name>
```

---

## Running Processes

```bash
docker top <container_name>
```

---

## Inspect Container

```bash
docker inspect <container_name>
```

---

# 6. Docker Volumes ⭐⭐⭐⭐

## List Volumes

```bash
docker volume ls
```

---

## Create Volume

```bash
docker volume create myvolume
```

---

## Inspect Volume

```bash
docker volume inspect myvolume
```

---

## Remove Volume

```bash
docker volume rm myvolume
```

---

## Remove Unused Volumes

```bash
docker volume prune
```

---

# 7. Docker Networks ⭐⭐⭐⭐

## List Networks

```bash
docker network ls
```

---

## Create Network

```bash
docker network create mynetwork
```

---

## Inspect Network

```bash
docker network inspect mynetwork
```

---

## Connect Container

```bash
docker network connect mynetwork mycontainer
```

---

## Remove Network

```bash
docker network rm mynetwork
```

---

# 8. Docker Compose ⭐⭐⭐⭐

## Start Containers

```bash
docker compose up
```

---

## Start in Background

```bash
docker compose up -d
```

---

## Stop Containers

```bash
docker compose down
```

---

## Restart

```bash
docker compose restart
```

---

## Build Services

```bash
docker compose build
```

---

## View Logs

```bash
docker compose logs
```

---

# 9. Docker Hub ⭐⭐⭐

## Login

```bash
docker login
```

---

## Logout

```bash
docker logout
```

---

## Push Image

```bash
docker push username/myapp
```

---

## Pull Image

```bash
docker pull username/myapp
```

---

## Tag Image

```bash
docker tag myapp username/myapp:v1
```

---

# 10. Docker System Commands ⭐⭐⭐

## Remove Unused Resources

```bash
docker system prune
```

---

## Remove Everything

```bash
docker system prune -a
```

---

## Docker Disk Usage

```bash
docker system df
```

---

# 11. File Transfer ⭐⭐

## Host → Container

```bash
docker cp file.txt <container_name>:/app
```

---

## Container → Host

```bash
docker cp <container_name>:/app/file.txt .
```

---

# 12. Monitoring ⭐⭐

## Live Docker Events

```bash
docker events
```

---

## Resource Usage

```bash
docker stats
```

---

# 13. Most Frequently Used Commands

```bash
docker --version
docker info
docker version

docker images
docker pull nginx
docker build -t myapp .

docker run nginx
docker run -d nginx
docker run -it ubuntu bash
docker run -p 8080:80 nginx

docker ps
docker ps -a
docker stop <container_name>
docker start <container_name>
docker restart <container_name>
docker rm <container_name>

docker exec -it <container_name> bash
docker logs <container_name>

docker volume ls
docker network ls

docker compose up -d
docker compose down

docker system prune
```

---

# 📌 Interview Priority

| Priority | Topics |
|----------|--------|
| ⭐⭐⭐⭐⭐ | Images, Containers, Dockerfile, `run`, `build`, `ps`, `exec`, `logs` |
| ⭐⭐⭐⭐ | Volumes, Networks, Docker Compose |
| ⭐⭐⭐ | Docker Hub, Cleanup Commands |
| ⭐⭐ | Monitoring, File Transfer |
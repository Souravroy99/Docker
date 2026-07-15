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

+++++++++++++++++++++++++++++++++++++++
docker --version
+++++++++++++++++++++++++++++++++++++++


**Description:** Displays the installed Docker version.

---

## Display Docker Information

+++++++++++++++++++++++++++++++++++++++
docker info
+++++++++++++++++++++++++++++++++++++++


**Description:** Shows Docker Engine, Images, Containers, Networks, Volumes, Storage Driver, etc.

---

## Client & Server Version

+++++++++++++++++++++++++++++++++++++++
docker version
+++++++++++++++++++++++++++++++++++++++


**Description:** Shows Docker Client and Docker Server versions.

---

## Docker Help

+++++++++++++++++++++++++++++++++++++++
docker --help
+++++++++++++++++++++++++++++++++++++++


**Description:** Lists all Docker commands.

---

# 2. Docker Images ⭐⭐⭐⭐⭐

## Download an Image

+++++++++++++++++++++++++++++++++++++++
docker pull nginx
+++++++++++++++++++++++++++++++++++++++


---

## Search Images

+++++++++++++++++++++++++++++++++++++++
docker search nginx
+++++++++++++++++++++++++++++++++++++++


---

## List Images

+++++++++++++++++++++++++++++++++++++++
docker images
+++++++++++++++++++++++++++++++++++++++


or

+++++++++++++++++++++++++++++++++++++++
docker image ls
+++++++++++++++++++++++++++++++++++++++


---

## Remove an Image

+++++++++++++++++++++++++++++++++++++++
docker rmi nginx
+++++++++++++++++++++++++++++++++++++++


or

+++++++++++++++++++++++++++++++++++++++
docker image rm nginx
+++++++++++++++++++++++++++++++++++++++


---

## Build an Image

+++++++++++++++++++++++++++++++++++++++
docker build -t myapp .
+++++++++++++++++++++++++++++++++++++++


### Options

| Option | Meaning |
|--------|---------|
| `-t`   | Assign a name (tag) to the image |

---

## Build Using Dockerfile

+++++++++++++++++++++++++++++++++++++++
docker build -f Dockerfile -t myapp .
+++++++++++++++++++++++++++++++++++++++


---

# 3. Docker Containers ⭐⭐⭐⭐⭐

## Create & Run Container

+++++++++++++++++++++++++++++++++++++++
docker run nginx
+++++++++++++++++++++++++++++++++++++++


---

## Run in Detached Mode

+++++++++++++++++++++++++++++++++++++++
docker run -d nginx
+++++++++++++++++++++++++++++++++++++++


---

## Run in Interactive Mode

+++++++++++++++++++++++++++++++++++++++
docker run -it ubuntu bash
+++++++++++++++++++++++++++++++++++++++


---

## Run with Port Mapping

+++++++++++++++++++++++++++++++++++++++
docker run -p 8080:80 nginx
+++++++++++++++++++++++++++++++++++++++


**Meaning**

+++++++++++++++++++++++++++++++++++++++

Host (8080)
      │
      ▼
Container (80)
+++++++++++++++++++++++++++++++++++++++


Open:

+++++++++++++++++++++++++++++++++++++++

http://localhost:8080
+++++++++++++++++++++++++++++++++++++++


---

## Run with Container Name

+++++++++++++++++++++++++++++++++++++++
docker run --name mycontainer nginx
+++++++++++++++++++++++++++++++++++++++


---

## Run with Volume

+++++++++++++++++++++++++++++++++++++++
docker run -v myvolume:/app nginx
+++++++++++++++++++++++++++++++++++++++


---

## Run with Bind Mount

### Windows

+++++++++++++++++++++++++++++++++++++++
docker run -v C:\Project:/app nginx
+++++++++++++++++++++++++++++++++++++++


### Linux

+++++++++++++++++++++++++++++++++++++++
docker run -v /home/user/project:/app nginx
+++++++++++++++++++++++++++++++++++++++


---

# 4. Container Management ⭐⭐⭐⭐⭐

## Running Containers

+++++++++++++++++++++++++++++++++++++++
docker ps
+++++++++++++++++++++++++++++++++++++++


---

## All Containers

+++++++++++++++++++++++++++++++++++++++
docker ps -a
+++++++++++++++++++++++++++++++++++++++


---

## Stop Container

+++++++++++++++++++++++++++++++++++++++
docker stop <container_name>
+++++++++++++++++++++++++++++++++++++++


---

## Start Container

+++++++++++++++++++++++++++++++++++++++
docker start <container_name>
+++++++++++++++++++++++++++++++++++++++


---

## Restart Container

+++++++++++++++++++++++++++++++++++++++
docker restart <container_name>
+++++++++++++++++++++++++++++++++++++++


---

## Kill Container

+++++++++++++++++++++++++++++++++++++++
docker kill <container_name>
+++++++++++++++++++++++++++++++++++++++


---

## Remove Container

+++++++++++++++++++++++++++++++++++++++
docker rm <container_name>
+++++++++++++++++++++++++++++++++++++++


---

## Remove All Stopped Containers

+++++++++++++++++++++++++++++++++++++++
docker container prune
+++++++++++++++++++++++++++++++++++++++


---

# 5. Execute Commands Inside Container ⭐⭐⭐⭐⭐

## Execute a Command

+++++++++++++++++++++++++++++++++++++++
docker exec <container_name> ls
+++++++++++++++++++++++++++++++++++++++


---

## Open Bash

+++++++++++++++++++++++++++++++++++++++
docker exec -it <container_nam+++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++


If Bash is unavailable:

+++++++++++++++++++++++++++++++++++++++
docker exec -it <container_name> sh
+++++++++++++++++++++++++++++++++++++++


---

## View Logs

+++++++++++++++++++++++++++++++++++++++
docker logs <container_name>
+++++++++++++++++++++++++++++++++++++++


---

## Follow Logs

+++++++++++++++++++++++++++++++++++++++
docker logs -f <container_name>
+++++++++++++++++++++++++++++++++++++++


---

## Running Processes

+++++++++++++++++++++++++++++++++++++++
docker top <container_name>
+++++++++++++++++++++++++++++++++++++++


---

## Inspect Container

+++++++++++++++++++++++++++++++++++++++
docker inspect <container_name>
+++++++++++++++++++++++++++++++++++++++


---

# 6. Docker Volumes ⭐⭐⭐⭐

## List Volumes

+++++++++++++++++++++++++++++++++++++++
docker volume ls
+++++++++++++++++++++++++++++++++++++++


---

## Create Volume

+++++++++++++++++++++++++++++++++++++++
docker volume create myvolume
+++++++++++++++++++++++++++++++++++++++


---

## Inspect Volume

+++++++++++++++++++++++++++++++++++++++
docker volume inspect myvolume
+++++++++++++++++++++++++++++++++++++++


---

## Remove Volume

+++++++++++++++++++++++++++++++++++++++
docker volume rm myvolume
+++++++++++++++++++++++++++++++++++++++


---

## Remove Unused Volumes

+++++++++++++++++++++++++++++++++++++++
docker volume prune
+++++++++++++++++++++++++++++++++++++++


---

# 7. Docker Networks ⭐⭐⭐⭐

## List Networks

+++++++++++++++++++++++++++++++++++++++
docker network ls
+++++++++++++++++++++++++++++++++++++++


---

## Create Network

+++++++++++++++++++++++++++++++++++++++
docker network create mynetwork
+++++++++++++++++++++++++++++++++++++++


---

## Inspect Network

+++++++++++++++++++++++++++++++++++++++
docker network inspect mynetwork
+++++++++++++++++++++++++++++++++++++++


---

## Connect Container

+++++++++++++++++++++++++++++++++++++++
docker network connect mynetwork mycontainer
+++++++++++++++++++++++++++++++++++++++


---

## Remove Network

+++++++++++++++++++++++++++++++++++++++
docker network rm mynetwork
+++++++++++++++++++++++++++++++++++++++


---

# 8. Docker Compose ⭐⭐⭐⭐

## Start Containers

+++++++++++++++++++++++++++++++++++++++
docker compose up
+++++++++++++++++++++++++++++++++++++++


---

## Start in Background

+++++++++++++++++++++++++++++++++++++++
docker compose up -d
+++++++++++++++++++++++++++++++++++++++


---

## Stop Containers

+++++++++++++++++++++++++++++++++++++++
docker compose down
+++++++++++++++++++++++++++++++++++++++


---

## Restart

+++++++++++++++++++++++++++++++++++++++
docker compose restart
+++++++++++++++++++++++++++++++++++++++


---

## Build Services

+++++++++++++++++++++++++++++++++++++++
docker compose build
+++++++++++++++++++++++++++++++++++++++


---

## View Logs

+++++++++++++++++++++++++++++++++++++++
docker compose logs
+++++++++++++++++++++++++++++++++++++++


---

# 9. Docker Hub ⭐⭐⭐

## Login

+++++++++++++++++++++++++++++++++++++++
docker login
+++++++++++++++++++++++++++++++++++++++


---

## Logout

+++++++++++++++++++++++++++++++++++++++
docker logout
+++++++++++++++++++++++++++++++++++++++


---

## Push Image

+++++++++++++++++++++++++++++++++++++++
docker push username/myapp
+++++++++++++++++++++++++++++++++++++++


---

## Pull Image

+++++++++++++++++++++++++++++++++++++++
docker pull username/myapp
+++++++++++++++++++++++++++++++++++++++


---

## Tag Image

+++++++++++++++++++++++++++++++++++++++
docker tag myapp username/myapp:v1
+++++++++++++++++++++++++++++++++++++++


---

# 10. Docker System Commands ⭐⭐⭐

## Remove Unused Resources

+++++++++++++++++++++++++++++++++++++++
docker system prune
+++++++++++++++++++++++++++++++++++++++


---

## Remove Everything

+++++++++++++++++++++++++++++++++++++++
docker system prune -a
+++++++++++++++++++++++++++++++++++++++


---

## Docker Disk Usage

+++++++++++++++++++++++++++++++++++++++
docker system df
+++++++++++++++++++++++++++++++++++++++


---

# 11. File Transfer ⭐⭐

## Host → Container

+++++++++++++++++++++++++++++++++++++++
docker cp file.txt <container_name>:/app
+++++++++++++++++++++++++++++++++++++++


---

## Container → Host

+++++++++++++++++++++++++++++++++++++++
docker cp <container_name>:/app/file.txt .
+++++++++++++++++++++++++++++++++++++++


---

# 12. Monitoring ⭐⭐

## Live Docker Events

+++++++++++++++++++++++++++++++++++++++
docker events
+++++++++++++++++++++++++++++++++++++++


---

## Resource Usage

+++++++++++++++++++++++++++++++++++++++
docker stats
+++++++++++++++++++++++++++++++++++++++


---

# 13. Most Frequently Used Commands

+++++++++++++++++++++++++++++++++++++++
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
+++++++++++++++++++++++++++++++++++++++


---

# 📌 Interview Priority

| Priority | Topics |
|----------|--------|
| ⭐⭐⭐⭐⭐ | Images, Containers, Dockerfile, `run`, `build`, `ps`, `exec`, `logs` |
| ⭐⭐⭐⭐ | Volumes, Networks, Docker Compose |
| ⭐⭐⭐ | Docker Hub, Cleanup Commands |
| ⭐⭐ | Monitoring, File Transfer |
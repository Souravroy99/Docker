# 🐳 Docker Notes (Interview + Practical Guide)

---

# 📚 Table of Contents

1. What is Docker?
2. Docker Architecture
3. Docker Components
4. Docker Storage
5. Docker Networking
6. Docker Commands
7. Docker Workflow
8. Interview Tips

---

# 1️⃣ Docker

## Definition

Docker is an open-source containerization platform that packages an application along with all of its dependencies into a **container**, ensuring it runs consistently across different environments.

## Why Docker?

Without Docker:

- Works on my laptop ❌
- Fails on production ❌

With Docker:

- Works on every machine ✅

## Example

A Spring Boot application running on

- Your laptop
- Your teammate's laptop
- AWS Server

behaves exactly the same because everything it needs is inside the container.

---

# 2️⃣ Container

## Definition

A **Container** is a lightweight, isolated runtime environment that contains

- Application
- Runtime
- Libraries
- Dependencies
- Configuration

## Think of it as 📦

A lunch box.

Everything required for the application is already inside.

```
Container
│
├── Ubuntu
├── Java 21
├── Spring Boot App
├── Maven
└── Libraries
```

## Remember

A container is a **running instance of an image.**

---

# 3️⃣ Image

## Definition

A Docker Image is a **read-only blueprint** used to create containers.

## Relationship

```text
Docker Image
     │
docker run
     ▼
Docker Container
```

Example

```
Image : nginx

↓

Container : nginx running on port 80
```

## Remember

One Image can create multiple Containers.

```
Ubuntu Image

├── Container 1
├── Container 2
└── Container 3
```

---

# 4️⃣ Dockerfile

## Definition

A Dockerfile is a text file containing instructions for building a Docker Image.

Example

```dockerfile
FROM openjdk:21

COPY app.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]
```

Build Process

```text
Dockerfile
      │
docker build
      ▼
Docker Image
      │
docker run
      ▼
Container
```

---

# 5️⃣ Docker Engine

## Definition

Docker Engine is the core software responsible for building, running and managing containers.

It consists of

- Docker Daemon
- Docker CLI
- Docker REST API

---

# 6️⃣ Docker Daemon (dockerd)

## Definition

The Docker Daemon is the background service that

- Builds Images
- Starts Containers
- Stops Containers
- Creates Networks
- Creates Volumes

Without the daemon, Docker commands won't work.

---

# 7️⃣ Docker CLI

## Definition

CLI = Command Line Interface

It is the tool we use to communicate with Docker.

Example

```bash
docker ps

docker images

docker run nginx

docker stop container_id
```

Flow

```
You

↓

Docker CLI

↓

Docker Daemon

↓

Docker Engine
```

---

# 8️⃣ Docker Desktop

## Definition

Docker Desktop is the GUI application for Windows and macOS.

It includes

- Docker Engine
- Docker CLI
- Docker Compose
- Kubernetes (Optional)

---

# 9️⃣ Docker Hub

## Definition

Docker Hub is Docker's public cloud repository for storing images.

Popular Images

```
nginx

ubuntu

mysql

redis

mongo
```

---

# 🔟 Repository

## Definition

A Repository stores multiple versions (tags) of the same image.

Example

```
mysql

├── latest
├── 8.0
├── 8.4
└── 5.7
```

---

# 1️⃣1️⃣ Tag

## Definition

A Tag identifies a particular version of an image.

Examples

```
mysql:8.0

mysql:latest

nginx:1.27
```

Format

```
image_name:tag
```

---

# 1️⃣2️⃣ Volume

## Definition

Volumes provide **persistent storage**.

Without Volume

```
Delete Container

↓

Everything is deleted
```

With Volume

```
Delete Container

↓

Data still exists
```

Example

Database files

```
MySQL

↓

Docker Volume

↓

Data survives
```

---

# 1️⃣3️⃣ Bind Mount

## Definition

Maps a host directory directly into a container.

```
C:\Projects

↓

Container

/app
```

Changes made on either side are immediately visible.

---

# 1️⃣4️⃣ Network

## Definition

Allows containers to communicate securely.

Example

```
Frontend

↓

Backend

↓

Database
```

---

# 1️⃣5️⃣ Port Mapping

Command

```bash
docker run -p 8080:80 nginx
```

Meaning

```
Host Machine

8080

↓

Container

80
```

Visit

```
http://localhost:8080
```

---

# 1️⃣6️⃣ Docker Compose

Docker Compose manages multiple containers using one YAML file.

Instead of

```bash
docker run mysql

docker run backend

docker run frontend
```

Use

```bash
docker compose up
```

---

# 1️⃣7️⃣ Registry

A Registry stores Docker Images.

Examples

- Docker Hub
- GitHub Container Registry
- Azure Container Registry
- Amazon ECR

---

# 1️⃣8️⃣ Base Image

Starting image used for building another image.

```dockerfile
FROM ubuntu
```

or

```dockerfile
FROM openjdk:21
```

---

# 1️⃣9️⃣ Layer

Every Dockerfile instruction creates a new layer.

```dockerfile
FROM ubuntu

RUN apt update

RUN apt install java

COPY app.jar .
```

Benefits

- Faster builds
- Layer caching
- Smaller downloads

---

# 2️⃣0️⃣ Build

Creates an Image from a Dockerfile.

```bash
docker build -t myapp .
```

---

# 2️⃣1️⃣ Pull

Downloads an image.

```bash
docker pull nginx
```

---

# 2️⃣2️⃣ Push

Uploads an image.

```bash
docker push username/myapp
```

---

# 2️⃣3️⃣ Run

Creates and starts a container.

```bash
docker run nginx
```

---

# 2️⃣4️⃣ Stop

Stops a running container.

```bash
docker stop container_id
```

---

# 2️⃣5️⃣ Remove

Deletes a stopped container.

```bash
docker rm container_id
```

---

# 2️⃣6️⃣ Restart

```bash
docker restart container_id
```

Stops and starts the container again.

---

# 2️⃣7️⃣ Exec

Run commands inside an existing container.

```bash
docker exec -it mycontainer bash
```

---

# 2️⃣8️⃣ Detached Mode (-d)

Runs a container in the background.

```bash
docker run -d nginx
```

---

# 2️⃣9️⃣ Interactive Mode (-it)

Starts a container with an interactive terminal.

```bash
docker run -it ubuntu bash
```

---

# 3️⃣0️⃣ Orchestration

Managing multiple containers automatically.

Responsibilities

- Deployment
- Scaling
- Load Balancing
- Self Healing
- Networking

Tools

- Kubernetes
- Docker Swarm

---

# 🏗 Docker Architecture

```text
              User
                │
        docker run nginx
                │
                ▼
          Docker CLI
                │
                ▼
        Docker Daemon
                │
        ┌───────┴────────┐
        │                │
    Images          Containers
        │                │
        └───────┬────────┘
                │
          Docker Engine
```

---

# 🔄 Complete Docker Workflow

```text
Write Dockerfile
        │
        ▼
docker build
        │
        ▼
Docker Image
        │
docker push (optional)
        ▼
Docker Registry
        │
docker pull
        ▼
docker run
        ▼
Container
        │
 ├── Volume
 ├── Network
 └── Port Mapping
```



---

# ⭐ Interview Facts

- Image = Blueprint
- Container = Running Image
- Dockerfile = Recipe
- Volume = Persistent Storage
- Bind Mount = Host Folder Sharing
- Docker Hub = Public Image Repository
- Docker Compose = Multi-container Management
- Docker Engine = Core Runtime
- Docker Desktop = GUI for Windows/macOS
- Docker Daemon = Background Service
- Port Mapping = Host ↔ Container Communication

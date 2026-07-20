# Docker Compose Commands (Most Useful)

## Build and start containers (First time / After Dockerfile changes)
```bash
docker compose up --build
```

## Start containers
```bash
docker compose up
```

## Start in background
```bash
docker compose up -d
```

## Stop and remove containers
```bash
docker compose down
```

## Stop containers only
```bash
docker compose stop
```

## Start stopped containers
```bash
docker compose start
```

## Restart containers
```bash
docker compose restart
```

## View running containers
```bash
docker compose ps
```

## View logs
```bash
docker compose logs
```

## View live logs
```bash
docker compose logs -f
```

## Open terminal inside a container
```bash
docker compose exec frontend sh
```

```bash
docker compose exec backend sh
```

## Rebuild images
```bash
docker compose build
```

---

# Typical Workflow

### First time
```bash
docker compose up --build
```

### Every day
```bash
docker compose up
```

### Stop when done
```bash
docker compose down
```

### Debug
```bash
docker compose logs -f
docker compose ps
```
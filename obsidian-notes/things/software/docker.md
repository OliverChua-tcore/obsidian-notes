---
title: Docker
aliases:
  - Docker
created: 2026-01-12 20:50
tags:
  - software/dev
---
# Docker

### List volumes
```powershell
docker volume ls
```

### Inspect volume
```powershell
docker volume inspect volume-name
```
> Replace `volume-name` with the one that you want

### Back up volume
```powershell
$VOLUME_NAME = "volume-name"
$BACKUP_FILE = "$(Get-Date -Format 'yyyy-MM-dd')-volume-name-backup.tar.gz"

docker run --rm `
	-v "${VOLUME_NAME}:/backup-volume" `
	-v "${PWD}:/backup" `
	busybox `
	sh -c "cd /backup-volume && tar -zcvf /backup/$BACKUP_FILE ."
```
> Replace `volume-name` with the one that you want
> Run this in the folder where you want the `.tar.gz` file saved

### Restore volume
```powershell
$VOLUME_NAME = "volume-name"
$BACKUP_FILE = "$(Get-Date -Format 'yyyy-MM-dd')-volume-name-backup.tar.gz"

docker volume create $VOLUME_NAME | Out-Null  # safe if it already exists

docker run --rm `
	-v "${VOLUME_NAME}:/backup-volume" `
	-v "${PWD}:/backup" `
	busybox `
	sh -c "cd /backup-volume && tar -xvzf /backup/$BACKUP_FILE"
```
> Replace `volume-name` with the one that you want
> Run this in the folder containing the `.tar.gz` file

## Syntax of `docker run`

`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

|              |                                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------- |
| `docker run` | tells Docker to create a **new container** and start it                                            |
| `[OPTIONS]`  | flags that change how the container runs (network, volumes, env vars, name, ports, etc.)           |
| `IMAGE`      | the image to base the container on, e.g. `ubuntu`, `busybox`, `ghcr.io/open-webui/open-webui:main` |
| `[COMMAND]`  | (optional) what to run inside the container instead of the image’s default `CMD`/`ENTRYPOINT`      |
| `[ARG...]`   | (optional) arguments passed to that command                                                        | 

### Core structure with example

`docker run --rm -it -v mydata:/data -p 8080:80 --name web-test nginx:latest bash`

|                   |                                                                        |
| ----------------- | ---------------------------------------------------------------------- |
| `docker run`      | create and start a new container from an image                         |
| `--rm`            | delete the container when it exits (no leftover stopped container)     |
| `-it`             | `-i` keeps STDIN open, `-t` allocates a pseudo‑TTY (interactive shell) |
| `-v mydata:/data` | mount volume `mydata` into the container at `/data`                    |
| `-p 8080:80`      | map host port 8080 → container port 80                                 |
| `--name web-test` | give the container a fixed name `web-test`                             |
| `nginx:latest`    | the IMAGE; pull if needed, then run it                                 |
| `bash`            | override default command and run `bash` inside the container           |

### Commonly used options by category

#### Identity / lifecycle

|                                                              |                     |
| ------------------------------------------------------------ | ------------------- |
| `--name NAME`                                                | set container name  |
| `--rm`                                                       | auto‑remove on exit |
| `--restart=always`&#124;`unless-stopped`&#124;`on-failure:N` | restart policy      |

#### Interaction

|      |                              |
| ---- | ---------------------------- |
| `-d` | run in background (detached) |
| `-i` | keep STDIN open              |
| `-t` | allocate TTY                 |

> [!example] Typical patterns
> - Non‑interactive service: `docker run -d ... IMAGE`
> - Interactive shell: `docker run -it ... IMAGE bash`

#### Filesystem / volumes

|                             |                                                                              |
| --------------------------- | ---------------------------------------------------------------------------- |
| `-v SRC:DST[:ro`&#124;`rw]` | bind or named volume                                                         |
| `--read-only`               | mount root filesystem read‑only (usually with writable volumes for app data) |

> `SRC` is host path _or_ a named volume
> `DST` is container path
> `:ro` for read‑only, `:rw` (default) for read‑write

#### Networking / ports

|                     |                                                                  |
| ------------------- | ---------------------------------------------------------------- |
| `-p HOST:CONTAINER` | publish container port to the host                               |
| `--network NAME`    | attach to given network (e.g. `bridge`, `host`, or user‑defined) |

#### Configuration / env

|                   |                                        |
| ----------------- | -------------------------------------- |
| `-e KEY=value`    | environment variable                   |
| `--env-file FILE` | load many env vars from a file         |
| `-w /path`        | working directory inside the container |

### Applying this to your backup commands
`docker run --rm \   -v open-webui:/backup-volume \  -v "$(pwd)":/backup \  busybox \  sh -c "cd /backup-volume && tar -zcvf /backup/open-webui-backup.tar.gz ."`

|                                |                                                                         |
| ------------------------------ | ----------------------------------------------------------------------- |
| `--rm`                         | remove the helper container after the tar finishes                      |
| `-v open-webui:/backup-volume` | mount the Open WebUI named volume at `/backup-volume`                   |
| `-v "$(pwd)":/backup`          | mount current host directory into container as `/backup`                |
| `busybox`                      | minimal image used to run `tar`                                         |
| `sh -c "..."`                  | the command executed inside the container, which does the actual backup |

# SETUP_INFRASTRUCTURE_SPRINT2.md

Documentație pentru instalarea și rularea infrastructurii în Sprintul 2, folosind Docker și Docker Compose, pe Manjaro Linux într-o mașină virtuală VirtualBox.

---

##Cerințe de sistem

- Sistem de operare: Manjaro Linux (pe VirtualBox)
- Docker: v24.x sau mai nou
- Docker Compose: v2.x sau mai nou
- Git (opțional)
- Acces sudo

##Instalare Docker pe Manjaro

bash
sudo pacman -Syu
sudo pacman -S docker
sudo systemctl enable docker.service
sudo systemctl start docker.service
sudo usermod -aG docker $USER

>Repornește sesiunea (logout/login sau `reboot`) pentru ca modificările să aibă efect.

##Verificare Docker

bash
docker --version
docker run hello-world

##Instalare Docker Compose

bash
docker compose version  # verificare dacă este deja inclus

# dacă nu e disponibil:
sudo pacman -S docker-compose

##Structura proiectului

```
project-root/
├── docker-compose.yml
├── backend/
│   └── Dockerfile
├── frontend/
│   └── Dockerfile
└── .env

##Conținutul fișierului docker-compose.yml

yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    env_file:
      - .env

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    env_file:
      - .env

##Comenzi de rulare și testare

### Build și pornire containere:
bash
docker compose up --build
```

###Pornire simplă:
bash
docker compose up
```

###Oprire containere:
```bash
docker compose down
```


##Troubleshooting

| Problemă                                  | Soluție                                                                 |
|-------------------------------------------|-------------------------------------------------------------------------|
| `Permission denied` la comenzi Docker     | `sudo usermod -aG docker $USER` + `reboot`                             |
| Porturi ocupate (3000/8000)               | Editează porturile din `docker-compose.yml`                            |
| Containerele nu comunică între ele        | Folosește numele serviciului ca hostname (ex: `backend:8000`)          |
| Docker nu pornește                        | Rulează `sudo systemctl start docker`                                  |
| Ecran mic / fără integrare VirtualBox     | Instalează `sudo pacman -S virtualbox-guest-utils` și repornește       |




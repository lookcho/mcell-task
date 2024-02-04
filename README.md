
# Comments

- If this was supposed to be real, I should have:
    - used `Honcho` to run both in the same container
    - used `Poetry` to handle the versions better
    - used `Black` to be more strict about the python formating
    - used `React Query`
    - used `Pydantic` with FastAPI as a serializer

# Installation and running

## First
- clone the repo
- replace back/actions.json if you want

## With Docker
- either with `apt` or `brew` or `windows installer`:
    - install `docker` (and docker-compose if on old Docker)
- cd "the folder with `docker-compose.yml`"

> docker compose up
- or docker-compose up if on olde docker

## Or locally 
- create a venv from /back using `python >3.8` 
- pip install requirements.txt (inside the `/back `venv)

- install npm
- npm install (inside the `/front` folder)

- run in separate terminals:

> python back/run.py

> npm run dev


# When active open the following:

http://localhost:5173

http://localhost:3000/docs



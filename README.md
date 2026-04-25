# Meditation API

A simple RESTful API for tracking meditation sessions.

## Live Demo

https://meditation-api-xtf8.onrender.com/

## Features

- Create meditation sessions
- View all sessions
- Get session by ID
- Delete session
- Input validation

## Tech Stack

- Node.js
- Express
- Docker
- Render (deployment)

## Project Structure

meditation-api/
controllers/
routes/
public/
index.js

## Installation (Local)

```bash
git clone https://github.com/JoAnn-git/meditation-api
cd meditation-api
npm install
npm run dev
```

## Run with Docker

docker build -t meditation-api .
docker run -p 3000:3000 meditation-api

## API Endpoints

# GET /sessions

Return all sessions

# POST /sessions

Create a session

Example:
{
"duration": 30,
"notes": "morning meditation"
}

# GET /sessions/:id

Get one session

# DELETE /sessions/:id

Delete session

## Future Improvements

- Add PostgreSQL database
- Add authentication (JWT)
- Add pagination

## About

This project was built as part of my backend learning journey, focusing on API design, Docker, and deployment.

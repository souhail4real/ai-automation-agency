# Averon Project Structure

This repository contains a minimal full-stack starter structure for the Averon automation agency website.

## Frontend (React + Vite + Tailwind)

```bash
cd frontend
npm install
npm run dev
```

Default dev URL: `http://localhost:5173`

## Backend (FastAPI)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Default API URL: `http://localhost:8000`

## Structure

- `frontend/`: React app with Tailwind, Router, axios API client, and starter pages/components.
- `backend/`: FastAPI app with health route and contact endpoint stub.

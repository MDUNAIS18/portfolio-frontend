# Portfolio Frontend

This repository contains the frontend for MD Unais's portfolio site.

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Running frontend + backend locally

Backend lives in `backend/` and exposes `/api` endpoints.

1) Create `backend/.env`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/foliohub
# Set your deployed frontend origin in production; leave empty in dev
FRONTEND_URL=
```

2) Start backend:

```bash
cd backend
npm install
npm run dev
```

3) Start frontend in another terminal from repo root:

```bash
npm install
npm run dev
```

The frontend dev server runs on `http://localhost:8080` and proxies `/api/*` to `http://localhost:5000`.

Health check: visit `http://localhost:5000/` to see `{ status: "ok" }`.

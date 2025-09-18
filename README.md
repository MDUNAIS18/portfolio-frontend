# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ba4fc788-fae8-4d03-847f-50260c703870

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ba4fc788-fae8-4d03-847f-50260c703870) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

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

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ba4fc788-fae8-4d03-847f-50260c703870) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# Cyber Awareness Game

A story-driven cybersecurity learning game built with React, Vite, and Express. Players navigate simulated cyberattack scenarios, learn about phishing, scams, password hygiene, privacy, and safe digital behavior, and track progress through rankings and streaks.

## Overview

This project combines interactive gameplay, educational content, and backend user tracking to teach cyber awareness in a hands-on way. It includes:

- story-based cyber safety missions
- login and registration flows
- user progress tracking
- password vault for secure credential practice
- security quizzes and learning modules
- streak and ranking features
- scam simulation scenarios

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB with Mongoose
- Authentication: JWT
- Encryption: AES-256-GCM for vault data
- Styling: custom React UI and CSS

## Project Structure

```text
cyber-awareness-game/
├── public/
├── server/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── server.js
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
├── index.html
├── README.md
└── eslint.config.js
```

## Prerequisites

Before running the project, make sure you have:

- Node.js 18+
- npm
- MongoDB running locally on `mongodb://localhost:27017/cyberverse`

## Quick Start

### 1. Install frontend dependencies

```powershell
npm install
```

### 2. Install backend dependencies

```powershell
cd server
npm install
cd ..
```

### 3. Set environment variables

Generate a strong secret for each variable:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Set them in your current PowerShell session:

```powershell
$env:JWT_SECRET = "<your-jwt-secret>"
$env:VAULT_ENCRYPTION_KEY = "<64-character-hex-key>"
```

> `VAULT_ENCRYPTION_KEY` must be a 64-character hexadecimal string. Keep it secure; if it is lost, newly encrypted vault entries cannot be recovered.

### 4. Start MongoDB

Make sure MongoDB is running locally before starting the server.

### 5. Start the backend

```powershell
cd server
node server.js
```

### 6. Start the frontend

Open a new terminal in the project root and run:

```powershell
npm run dev
```

Then open the local Vite URL in your browser, typically:

```text
http://localhost:5173
```

## Environment Variables

This project expects the following variables at runtime:

- `JWT_SECRET`: used to sign and verify JWTs for authenticated routes
- `VAULT_ENCRYPTION_KEY`: used to encrypt and decrypt stored vault passwords

These values should be provided by your deployment platform or local environment only. Never commit them to Git.

## Security Notes

- `.env*` files are ignored by Git.
- Do not commit secrets or tokens.
- Update secrets in deployment environments, not in source code.
- The app stores encrypted passwords in the vault, but the security keys must be managed carefully.

## Features in Brief

- cyber crime awareness learning modules
- scenario-based decision making
- user authentication and tracking
- leaderboard and streak mechanics
- secure password vault concept for practice
- educational content on phishing, scams, shoulder surfing, password security, and privacy

## License

This project is distributed under the ISC license as defined in the package configuration.

## Contributing

Contributions are welcome. If you want to improve gameplay, add educational content, or polish the security flows, open an issue or submit a pull request.

## Project Status

This project is actively used as a cybersecurity awareness game and is suitable for educational demos, workshops, and learning labs.


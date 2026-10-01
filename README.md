# React + Vite

## Backend

The server requires separate `JWT_SECRET` and `VAULT_ENCRYPTION_KEY` environment variables. Generate a different random value for each with:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

In PowerShell, set the generated value for the current session before starting the server:

```powershell
$env:JWT_SECRET = "<generated-secret>"
$env:VAULT_ENCRYPTION_KEY = "<different-generated-secret>"
cd server
npm install
node server.js
```

The vault key must be 64 hexadecimal characters. Back it up securely: losing it makes newly encrypted vault entries unrecoverable. Set both variables in your deployment environment and never commit either secret.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

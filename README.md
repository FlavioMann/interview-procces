# Interview Procces

Simple REST API built with Node.js, Express and TypeScript.

This project implements a basic event-driven account management system using in-memory storage (no database).

---

## 🚀 Tech Stack

- Node.js
- Express
- TypeScript
- In-memory data store

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

Install dependencies:

```bash
npm install
```

---

## 🧪 Running Locally

Development mode:

```bash
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

## 🌍 Exposing the API with ngrok

Make sure the server is running locally on port 3000.

Then start ngrok:

```bash
ngrok http 3000
```

Ngrok will generate a public HTTPS URL like:

```
https://xxxx.ngrok-free.app
```

Use this URL to access the API externally.


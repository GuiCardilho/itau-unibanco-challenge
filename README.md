# Banking Transactions API 🏦

This project was developed as part of the **Itaú Unibanco admission challenge**, demonstrating the implementation of a banking transactions API using modern development practices and technologies with **NestJS + TypeScript**.

---

## ✨ Overview

This API provides a clean and efficient interface for handling financial transactions in memory. It was built with attention to:

- 🧼 Clean and readable code
- 🧱 Simple and modular structure
- ✅ Proper input validation and error handling
- 🐳 Container-ready deployment with Docker
- 🧪 Testing support with Jest
- 🩺 Health monitoring endpoint

---

## 💫 Key Features

- 📥 Receive transactions via POST
- 📤 Clear all transactions
- 📊 Get real-time statistics for the last 60 seconds
- 🩺 Health check endpoint
- 🔍 Request logging via interceptors
- 🧹 Validation with proper HTTP status handling
- 🧪 Unit and e2e test support

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Git
- Docker (optional, but recommended)

---

### 🐳 Running with Docker (Recommended)

1. Build the Docker image:

```bash
docker build -t nest-api .
```

2. Run the container:

```bash
docker run -p 3000:3000 nest-api
```

3. Or using Docker Compose:

```bash
docker-compose up --build
```

---

### 💻 Local Development

1. Clone the repository:

```bash
git clone https://github.com/guicardilho/itau-unibanco-challenge
cd itau-unibanco-challenge
```

2. Install dependencies:

```bash
npm install
```

3. Start the API:

```bash
# Development with hot reload
npm run start:dev

# Build and run in production mode
npm run build
npm run start:prod
```

---

### 🔍 Verify Installation

- Health check: [http://localhost:3000/health](http://localhost:3000/health)
- Swagger Docs (if enabled): [http://localhost:3000/docs](http://localhost:3000/docs)

---

## 📚 API Endpoints

### `/transacao` `POST`

Receives a transaction:

```json
{
  "valor": 100.5,
  "dataHora": "2025-04-05T14:00:00.000Z"
}
```

- `201 Created`: valid transaction
- `422 Unprocessable Entity`: invalid value/date
- `400 Bad Request`: malformed JSON

---

### `/transacao` `DELETE`

Clears all stored transactions.

- `200 OK`

---

### `/estatistica` `GET`

Returns stats for transactions within the last 60 seconds:

```json
{
  "count": 10,
  "sum": 500.0,
  "avg": 50.0,
  "min": 10.0,
  "max": 100.0
}
```

---

### `/health` `GET`

Simple health check endpoint.

---

## 🧪 Testing & Quality

```bash
# Run unit tests
npm run test

# End-to-end tests
npm run test:e2e

# Coverage report
npm run test:cov

# Lint code
npm run lint
```

---

## 🛠️ Project Structure

```
src/
├── main.ts
├── transactions/        # Core module (POST, DELETE, logic)
│   ├── dto/
│   ├── entities/
│   ├── services/
│   └── repository/
├── statistics/          # GET /estatistica handler
├── health/              # Health check
├── common/              # Interceptors, filters
```

---

## 🧰 Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Testing**: Jest & Supertest
- **Validation**: class-validator
- **Docs**: Swagger (if enabled)
- **Containerization**: Docker & Docker Compose

---

## ✅ Challenge Goals Met

- [x] Receber e validar transações
- [x] Estatísticas dos últimos 60 segundos
- [x] Armazenamento em memória
- [x] 100% em JSON
- [x] Endpoints e formatos exatamente como especificado
- [x] Health check
- [x] Containerização
- [x] Código limpo e bem testado

---

## 🌟 Author

This challenge implementation was developed by **Guilherme Cardilho** as part of the Itaú Unibanco selection process.

---

Made with ❤️ for the Itaú Unibanco admission challenge.

# Itaú Unibanco API 🏦

A modern NestJS-based API for handling banking transactions and services.

## 🚀 Features

- Health check endpoints for monitoring
- Transaction management
- RESTful API design
- Swagger documentation
- Robust error handling
- Type safety with TypeScript

## 🛠️ Technologies

- Node.js
- NestJS Framework
- TypeScript
- Jest for testing
- Swagger for API documentation
- ESLint & Prettier for code quality
- Class Validator & Class Transformer

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd itau-unibanco
```

2. Install dependencies:

```bash
npm install
```

## 🏃‍♂️ Running the Application

### Development mode

```bash
npm run start:dev
```

### Production mode

```bash
npm run build
npm run start:prod
```

### Debug mode

```bash
npm run start:debug
```

## 🧪 Testing

### Running unit tests

```bash
npm run test
```

### Running e2e tests

```bash
npm run test:e2e
```

### Test coverage

```bash
npm run test:cov
```

## 📚 API Documentation

Once the application is running, you can access the Swagger documentation at:

```
http://localhost:3000/docs
```

## 🔍 Code Quality

- Run linting:

```bash
npm run lint
```

- Format code:

```bash
npm run format
```

## 📁 Project Structure

```
src/
├── app/           # Application core module
├── health/        # Health check endpoints
├── shared/        # Shared utilities and common code
├── transactions/  # Transaction related features
└── main.ts        # Application entry point
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

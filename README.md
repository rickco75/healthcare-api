# Healthcare API

Welcome to the **Healthcare API**, a robust and scalable backend service designed to manage healthcare-related data efficiently. Built with Node.js, TypeScript, and leveraging powerful technologies like Apollo Server, GraphQL, and TypeORM, this API ensures high performance, security, and maintainability.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Linting](#linting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **GraphQL API**: Seamless data querying and manipulation with GraphQL.
- **TypeORM Integration**: Efficient database interactions with PostgreSQL.
- **Validation**: Comprehensive input validation using Zod schemas.
- **Error Handling**: Centralized error management with custom middleware and exception handlers.
- **Testing**: Robust testing suite with Jest for unit, integration, and E2E tests.
- **Linting & Formatting**: Consistent code quality with ESLint and Prettier.
- **Authentication & Authorization**: Secure authentication mechanisms and role-based access control.

## Technology Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **API**: [GraphQL](https://graphql.org/) with [Apollo Server](https://www.apollographql.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [TypeORM](https://typeorm.io/)
- **Validation**: [Zod](https://github.com/colinhacks/zod)
- **Testing**: [Jest](https://jestjs.io/)
- **Linting**: [ESLint](https://eslint.org/)
- **Development Tools**: [Nodemon](https://nodemon.io/), [ts-node](https://typestrong.org/ts-node/)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) database

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/healthcare-api.git
   cd healthcare-api
   ```

2. **Install dependencies**

   Using Yarn:

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and define the necessary environment variables. Refer to the `.env.example` file for guidance.

   ```env
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=your_username
   DATABASE_PASSWORD=your_password
   DATABASE_NAME=healthcare_db
   PORT=4000
   JWT_SECRET=your_jwt_secret
   ```

## Environment Variables

Ensure the following environment variables are set in your `.env` file:

| Variable            | Description                                        | Example           |
| ------------------- | -------------------------------------------------- | ----------------- |
| `DATABASE_HOST`     | Hostname of the PostgreSQL database                | `localhost`       |
| `DATABASE_PORT`     | Port number of the PostgreSQL database             | `5432`            |
| `DATABASE_USERNAME` | Username for the PostgreSQL database               | `admin`           |
| `DATABASE_PASSWORD` | Password for the PostgreSQL database               | `securepassword`  |
| `DATABASE_NAME`     | Name of the PostgreSQL database                    | `healthcare_db`   |
| `PORT`              | Port number on which the server will run           | `4000`            |
| `JWT_SECRET`        | Secret key for JWT authentication                  | `your_jwt_secret` |

## Scripts

Defined in the `package.json` file for various development tasks.

- **Build the project**

  ```bash
  yarn build
  ```

- **Start the application**

  ```bash
  yarn start
  ```

- **Run in development mode with hot-reloading**

  ```bash
  yarn dev
  ```

- **Lint the codebase**

  ```bash
  yarn lint
  ```

- **Run tests**

  ```bash
  yarn test
  ```

## Project Structure

```bash
yarn test --coverage
```

```plaintext
healthcare-api/
├── src/
│   ├── modules/
│   │   ├── user/
│   │   │   ├── user.module.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.resolver.ts
│   │   │   └── dto/
│   │   └── auth/
│   │       ├── auth.module.ts
│   │       ├── auth.service.ts
│   │       └── auth.resolver.ts
│   ├── common/
│   │   ├── pipes/
│   │   │   └── zod-validation.pipe.ts
│   │   ├── middleware/
│   │   │   └── error-handler.middleware.ts
│   │   └── exceptions/
│   │       └── custom-exception.ts
│   ├── schemas/
│   │   ├── user.schema.ts
│   │   └── auth.schema.ts
│   ├── database/
│   │   └── ormconfig.ts
│   ├── utils/
│   │   └── logger.ts
│   ├── types/
│   │   └── index.ts
│   └── index.ts
├── test/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .eslintrc.js
├── .prettierrc
├── jest.config.js
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## Testing

Comprehensive testing ensures the reliability and robustness of the application.

- **Unit Tests**: Located in the `test/unit/` directory.

  ```bash
  yarn test
  ```

- **Integration Tests**: Located in the `test/integration/` directory.

- **End-to-End Tests**: Located in the `test/e2e/` directory using tools like Supertest or Cypress.

**Test Coverage**

Aim for high test coverage to ensure all critical paths are tested. Generate coverage reports using Jest:

```bash
yarn test --coverage
```

## Linting

Maintain code quality and consistency using ESLint.

- **Run Linter**

  ```bash
  yarn lint
  ```

- **Fix Linting Issues Automatically**

  ```bash
  yarn lint --fix
  ```

**ESLint Configuration**

Refer to the `.eslintrc.js` file for detailed linting rules and configurations.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository**

2. **Create a new branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**

4. **Commit your changes**

   ```bash
   git commit -m "Add your descriptive commit message"
   ```

5. **Push to the branch**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**

Ensure all tests pass and the code adheres to the linting rules before submitting.

## License

This project is licensed under the [ISC License](LICENSE).

---

**Contact**

For any inquiries or support, please contact [your-email@example.com](mailto:your-email@example.com).

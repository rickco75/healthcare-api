# Healthcare API

Welcome to the **Healthcare API**, a robust and scalable backend service designed to manage healthcare-related data efficiently. Built with Node.js, TypeScript, and leveraging Express.js and SQLite, this API ensures high performance, security, and maintainability.

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

- **RESTful API**: Efficient data querying and manipulation with Express.js.
- **TypeORM Integration**: Efficient database interactions with SQLite.
- **Error Handling**: Centralized error management with custom middleware and exception handlers.
- **Testing**: Unit testing with Jest.
- **Linting & Formatting**: Consistent code quality with ESLint and Prettier.

## Technology Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **API Framework**: [Express.js](https://expressjs.com/)
- **Database**: [SQLite](https://www.sqlite.org/) with [TypeORM](https://typeorm.io/)
- **Testing**: [Jest](https://jestjs.io/)
- **Linting**: [ESLint](https://eslint.org/)
- **Development Tools**: [Nodemon](https://nodemon.io/), [ts-node](https://typestrong.org/ts-node/)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rickco75/healthcare-api.git
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
   DATABASE_PATH=./database.sqlite
   PORT=3000
   DATABASE_TYPE=sqlite
   DATABASE_SYNCHRONIZE=true
   DATABASE_LOGGING=true
   ```

## Environment Variables

Ensure the following environment variables are set in your `.env` file:

| Variable        | Description                              | Example                    |
| --------------- | ---------------------------------------- | -------------------------- |
| `DATABASE_PATH` | Path to the SQLite database file         | `./data/healthcare.sqlite` |
| `PORT`          | Port number on which the server will run | `4000`                     |

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

```plaintext
healthcare-api/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── config/
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

The project uses Jest for unit testing. Test files are located in the same directory as the files they are testing against.

Currently, there is one test file:

- `UserService.test.ts`: Located in the `src/services/` directory, testing the UserService.

To run tests:

```bash
yarn test
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

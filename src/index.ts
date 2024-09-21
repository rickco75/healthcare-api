import 'reflect-metadata';
import app from './app';
import { initializeDatabase } from './utils/Database';

const PORT = process.env.PORT || 3000;

/**
 * Starts the Express server after establishing the database connection.
 */
const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();
import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middleware/errorHandler';

/**
 * Configures and returns the Express application.
 * @returns {Application} The configured Express application.
 */
const app: Application = express();

// Middleware to parse JSON requests
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
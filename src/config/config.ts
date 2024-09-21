import dotenv from 'dotenv';

/**
 * Loads environment variables from a .env file into process.env.
 */
dotenv.config();

/**
 * Configuration variables.
 */
export const config = {
  port: process.env.PORT || 3000,
  database: {
    type: process.env.DATABASE_TYPE || 'sqlite',
    database: process.env.DB_NAME || 'database.sqlite',
    synchronize: process.env.DATABASE_SYNCHRONIZE || true,
    logging: process.env.DATABASE_LOGGING || false,
  },

};
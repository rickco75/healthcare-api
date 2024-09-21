import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { config } from '../config/config';

/**
 * Initializes the SQLite database connection using TypeORM.
 * @returns {Promise<DataSource>} The established database connection.
 */
export const initializeDatabase = async (): Promise<DataSource> => {
  const dataSource = new DataSource({
    type: config.database.type as 'sqlite',
    database: config.database.database,
    entities: [User],
    synchronize: Boolean(config.database.synchronize), // Note: Set to false in production
    logging: Boolean(config.database.logging),
  });



  await dataSource.initialize();

  return dataSource;
};
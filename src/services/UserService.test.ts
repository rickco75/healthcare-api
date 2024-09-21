import { UserService } from './UserService';
import { User } from '../entities/User';
import { DataSource } from 'typeorm';

/**
 * Initializes the data source for testing.
 */
const AppDataSource = new DataSource({
  type: 'sqlite', // Replace with your database type if different
  database: ':memory:',
  entities: [User],
  synchronize: true,
});

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('UserService', () => {
  const userService = new UserService();

  it('should create a new user', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    const user = await userService.createUser(userData);
    expect(user).toHaveProperty('id');
    expect(user.name).toBe(userData.name);
    expect(user.email).toBe(userData.email);
  });

  it('should retrieve all users', async () => {
    const users = await userService.getAllUsers();
    expect(users.length).toBeGreaterThan(0);
  });

  it('should retrieve a user by ID', async () => {
    const user = await userService.getUserById(1);
    expect(user).toBeDefined();
    expect(user?.id).toBe(1);
  });

  it('should update a user', async () => {
    const updatedData = { name: 'Jane Doe' };
    const user = await userService.updateUser(1, updatedData);
    expect(user).toBeDefined();
    expect(user?.name).toBe(updatedData.name);
  });

  it('should delete a user', async () => {
    const success = await userService.deleteUser(1);
    expect(success).toBe(true);
    const user = await userService.getUserById(1);
    expect(user).toBeUndefined();
  });
});
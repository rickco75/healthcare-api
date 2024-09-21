import { User } from '../entities/User';

/**
 * Service class for managing users.
 */
export class UserService {
  /**
   * Retrieves all users from the database.
   * @returns {Promise<User[]>} An array of users.
   */
  async getAllUsers(): Promise<User[]> {
    return await User.find();
  }

  /**
   * Creates a new user with the provided data and saves it to the database.
   * @param userData - Partial user data to create a new user.
   * @returns The created and saved user.
   */
  async createUser(userData: Partial<User>): Promise<User> {
    const user = User.create(userData) as User
    return await user.save()
  }

  /**
   * Retrieves a user by their unique identifier.
   *
   * @param id - The unique identifier of the user.
   * @returns A promise that resolves to the user if found, or undefined otherwise.
   */
  async getUserById(id: number): Promise<User | undefined> {
    const user = await User.findOne({ where: { id } });
    return user ?? undefined;
  }

  /**
   * Updates a user's information.
   *
   * @param id - The ID of the user to update.
   * @param userData - Partial user data to update.
   * @returns The updated user or undefined if not found.
   */
  async updateUser(id: number, userData: Partial<User>): Promise<User | undefined> {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return undefined;
    }
    Object.assign(user, userData);
    await user.save();
    return user;
  }

  /**
   * Deletes a user by ID.
   *
   * @param id - The ID of the user to delete.
   * @returns A boolean indicating whether the deletion was successful.
   */
  async deleteUser(id: number): Promise<boolean> {
    const result = await User.delete(id);
    return (result.affected ?? 0) > 0
  }
}
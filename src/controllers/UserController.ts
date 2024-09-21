import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';

/**
 * Controller class for user-related endpoints.
 */
export class UserController {
  private userService: UserService;

  /**
   * Initializes the UserController with a UserService instance.
   */
  constructor() {
    this.userService = new UserService();
  }

  /**
   * Handles GET /api/users
   * Retrieves all users.
   */
  public getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Handles POST /api/users
   * Creates a new user.
   */
  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Handles GET /api/users/:id
   * Retrieves a user by ID.
   */
  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.getUserById(Number(req.params.id));
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Handles PUT /api/users/:id
   * Updates a user by ID.
   */
  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.updateUser(Number(req.params.id), req.body);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Handles DELETE /api/users/:id
   * Deletes a user by ID.
   */
  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const success = await this.userService.deleteUser(Number(req.params.id));
      if (!success) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
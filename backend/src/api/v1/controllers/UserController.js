import dbClient from '../database/db';
import { validateNewUserDetails } from '../utils/validateRequest';

class UserController {
  static async createUser(req, res) {
    const { error } = validateNewUserDetails(req);

    if (error) {
      return res.status(400).json({ error });
    }

    const newUser = await dbClient.createUser(req.body);
    return res.status(201).json(newUser);
  }
}

export default UserController;

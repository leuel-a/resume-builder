import dbClient from '../database/db';

class AppController {
  static getStatus(req, res) {
    const status = {
      db: dbClient.isAlive(),
    };
    res.json(status);
  }
}

export default AppController;

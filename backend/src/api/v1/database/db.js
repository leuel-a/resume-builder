import mongoose from 'mongoose';
import User from '../models/User';

class DBClient {
  constructor() {
    this.dbHost = process.env.DB_HOST || 'localhost';
    this.dbPort = process.env.DB_PORT || 27017;
    this.dbName = process.env.DB_DATABASE || 'resume-builder';

    const uri = `mongodb://${this.dbHost}:${this.dbPort}/${this.dbName}`;
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Connection to MongoDB successful');
      })
      .catch((error) => {
        console.log(`Error connecting to MongoDB: ${error}`);
      });
  }

  isAlive() {
    return mongoose.connection.readyState === 1;
  }

  async nbUsers() {
    return User.countDocuments({});
  }

  async createUser(user) {
    return User.create(user);
  }
}

const dbClient = new DBClient();
export default dbClient;

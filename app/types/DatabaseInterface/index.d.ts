import Sequelize from 'sequelize';

import { UserAttributes, UserInstance } from '../../models/user';

export interface DatabaseInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  User: Sequelize.Model<UserInstance, UserAttributes>;
}

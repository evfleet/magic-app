import Sequelize from 'sequelize';

import { SequelizeAttributes } from '../types/SequelizeAttributes';

export interface UserAttributes {
  id?: number;
  email: string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {}

export const UserFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<UserInstance, UserAttributes> => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    email: {
      type: DataTypes.STRING
    }
  };

  const User = sequelize.define<UserInstance, UserAttributes>('User', attributes);

  return User;
};

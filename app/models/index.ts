import Sequelize from 'sequelize';

import { UserFactory } from './user';

import { DatabaseInterface } from '../types/DatabaseInterface';

export const createModels = (): DatabaseInterface => {
  const sequelize = new Sequelize(
    process.env.POSTGRES_DB as string,
    process.env.POSTGRES_USER as string,
    process.env.POSTGRES_PASSWORD as string,
    {
      dialect: 'postgres'
    }
  );

  const database: DatabaseInterface = {
    sequelize,
    Sequelize,
    User: UserFactory(sequelize, Sequelize)
  };

  return database;
};

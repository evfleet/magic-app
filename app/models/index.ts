import Sequelize from 'sequelize';

import { CardFactory } from './card';
import { DeckFactory } from './deck';
import { UserFactory } from './user';

import { DatabaseInterface } from '../types/DatabaseInterface';

export const createModels = (): DatabaseInterface => {
  const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } = process.env;

  const sequelize = new Sequelize(POSTGRES_DB as string, POSTGRES_USER as string, POSTGRES_PASSWORD as string, {
    host: 'database',
    dialect: 'postgres'
  });

  const database: DatabaseInterface = {
    sequelize,
    Sequelize,
    Card: CardFactory(sequelize, Sequelize),
    Deck: DeckFactory(sequelize, Sequelize),
    User: UserFactory(sequelize, Sequelize)
  };

  return database;
};

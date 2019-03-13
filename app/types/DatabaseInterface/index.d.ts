import Sequelize from 'sequelize';

import { CardAttributes, CardInstance } from '../../models/card';
import { DeckAttributes, DeckInstance } from '../../models/deck';
import { UserAttributes, UserInstance } from '../../models/user';

export interface DatabaseInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  Card: Sequelize.Model<CardInstance, CardAttributes>;
  Deck: Sequelize.Model<DeckInstance, DeckAttributes>;
  User: Sequelize.Model<UserInstance, UserAttributes>;
}

import Sequelize from 'sequelize';

import { SequelizeAttributes } from '../types/SequelizeAttributes';

export interface DeckAttributes {
  id?: number;
}

export interface DeckInstance extends Sequelize.Instance<DeckAttributes>, DeckAttributes {}

export const DeckFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<DeckInstance, DeckAttributes> => {
  const attributes: SequelizeAttributes<DeckAttributes> = {};

  const Deck = sequelize.define<DeckInstance, DeckAttributes>('Deck', attributes);

  return Deck;
};

import Sequelize from 'sequelize';

import { SequelizeAttributes } from '../types/SequelizeAttributes';

export interface CardAttributes {
  id?: number;
}

export interface CardInstance extends Sequelize.Instance<CardAttributes>, CardAttributes {}

export const CardFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<CardInstance, CardAttributes> => {
  const attributes: SequelizeAttributes<CardAttributes> = {};

  const Card = sequelize.define<CardInstance, CardAttributes>('Card', attributes);

  return Card;
};

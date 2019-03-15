import { Document, Model, model, Schema } from 'mongoose';

interface CardAttributes {
  id?: any;
}

interface CardDocument extends CardAttributes, Document {}

interface CardModel extends Model<CardDocument> {}

const cardSchema: Schema = new Schema({});

export const Card = model<CardDocument, CardModel>('Card', cardSchema);

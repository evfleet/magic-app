import { Document, Model, model, Schema } from 'mongoose';

interface CardAttributes {
  id?: any;
  releasedAt: string;
  name: string;
  cardType: string;
  rarity: string;
  manaCost: string;
  cmc: string;
  text: string;
  setCode: string;
  collectionNumber: string;
  image_uris: {
    [key: string]: string;
  };
  legalities: {
    [key: string]: string;
  };
  games: [string];
}

interface CardDocument extends CardAttributes, Document {}

interface CardModel extends Model<CardDocument> {}

const cardSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  }
});

export const Card = model<CardDocument, CardModel>('Card', cardSchema);

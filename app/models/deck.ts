import { Document, Model, model, Schema } from 'mongoose';

interface DeckAttributes {
  id?: any;
}

interface DeckDocument extends DeckAttributes, Document {}

interface DeckModel extends Model<DeckDocument> {}

const deckSchema: Schema = new Schema({});

export const Deck = model<DeckDocument, DeckModel>('Deck', deckSchema);

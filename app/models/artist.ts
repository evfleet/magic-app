import { Document, Model, model, Schema } from 'mongoose';

interface ArtistAttributes {
  id?: any;
}

interface ArtistDocument extends ArtistAttributes, Document {}

interface ArtistModel extends Model<ArtistDocument> {}

const artistSchema: Schema = new Schema({});

export const Artist = model<ArtistDocument, ArtistModel>('Artist', artistSchema);

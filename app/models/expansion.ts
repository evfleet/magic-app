import { Document, Model, model, Schema } from 'mongoose';

interface ExpansionAttributes {
  id?: any;
}

interface ExpansionDocument extends ExpansionAttributes, Document {}

interface ExpansionModel extends Model<ExpansionDocument> {}

const expansionSchema: Schema = new Schema({});

export const Expansion = model<ExpansionDocument, ExpansionModel>('Expansion', expansionSchema);

import { Document, Model, model, Schema } from 'mongoose';

import { isFormattedYear, isImageUrl } from '../../utils';

interface ExpansionAttributes {
  id?: any;
  code: string;
  name: string;
  released_at: string;
  icon_url: string;
}

interface ExpansionDocument extends ExpansionAttributes, Document {}

interface ExpansionModel extends Model<ExpansionDocument> {}

const expansionSchema: Schema = new Schema({
  _id: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3
  },
  name: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => {
        return isFormattedYear(value);
      },
      message: 'Invalid date format'
    }
  },
  iconUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => {
        return isImageUrl(value);
      },
      message: 'Invalid image url'
    }
  }
});

export const Expansion = model<ExpansionDocument, ExpansionModel>('Expansion', expansionSchema);

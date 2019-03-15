import { Document, Model, model, Schema } from 'mongoose';

interface UserAttributes {
  id?: any;
}

interface UserDocument extends UserAttributes, Document {}

interface UserModel extends Model<UserDocument> {}

const userSchema: Schema = new Schema({});

export const User = model<UserDocument, UserModel>('User', userSchema);

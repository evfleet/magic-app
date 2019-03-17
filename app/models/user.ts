import argon2 from 'argon2';
import { Document, Model, model, Schema } from 'mongoose';

import { isEmail } from '../../utils';

export interface UserAttributes {
  id?: any;
  email: string;
  username: string;
  password: string;
}

export interface UserDocument extends UserAttributes, Document {
  comparePassword: () => Promise<boolean>;
}

export interface UserModel extends Model<UserDocument> {}

const userSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: {
      validator: (value: string) => {
        return isEmail(value);
      },
      message: 'Invalid email'
    }
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre<UserDocument>('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    this.password = await argon2.hash(this.password);
    return next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.comparePassword = async function(password: string): Promise<boolean> {
  return argon2.verify(this.password, password);
};

export const User = model<UserDocument, UserModel>('User', userSchema);

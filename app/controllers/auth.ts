import { Request, Response } from 'express';

import { User } from '../models/user';

const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await new User(req.body).save();

    console.log(user.email);

    res.send({ success: true });
  } catch (error) {
    console.log('register error', error);
    res.send({ success: false });
  }
};

export default {
  register
};

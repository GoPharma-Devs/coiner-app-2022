import User from 'model/users';
import { dbConnect } from 'utils/db';

require('dotenv').config();

dbConnect();

export default async function handler(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(400).json({ msg: 'Usuario o contraseña incorrectos' });
  }
  return res.status(200).json({ msg: 'Usuario logueado' });
}

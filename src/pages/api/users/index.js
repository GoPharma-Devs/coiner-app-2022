import User from 'model/users';
import { dbConnect } from 'utils/db';

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const user = await User.find();
        return res.status(200).json(user);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case 'POST':
      try {
        const newUser = new User(body);
        await newUser.save();
        return res.redirect('/gracias');
      } catch (error) {
        return res.redirect('/gracias');
      }
    default:
      return res.status(400).json({ msg: 'This method is not supported' });
  }
}

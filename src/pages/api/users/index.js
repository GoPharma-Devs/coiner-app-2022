import User from 'model/users';
import { dbConnect } from 'utils/db';

dbConnect();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const tasks = await User.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case 'POST':
      try {
        const newUser = new User(body);
        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: 'This method is not supported' });
  }
};

import { dbConnect } from 'utils/db';
import User from 'model/users';

dbConnect();

export default async function tasksHandler(req, res) {
  const {
    method,
    query: { id },
    body,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ msg: 'User does not exists' });
        return res.status(200).json(user);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case 'PUT':
      try {
        const user = await User.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        if (!user) return res.status(404).json({ msg: 'User does not exists' });
        return res.status(200).json(user);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case 'DELETE':
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser)
          return res.status(404).json({ msg: 'User does not exists' });
        return res.status(204).json();
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: 'This method is not supported' });
  }
}

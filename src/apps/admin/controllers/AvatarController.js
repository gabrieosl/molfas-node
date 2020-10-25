import Avatar from '../models/Avatar';

class AvatarController {
  async store(req, res) {
    const { filename: path } = req.file;

    const avatar = await Avatar.create({
      path,
    });
    return res.status(201).json(avatar);
  }
}

export default new AvatarController();

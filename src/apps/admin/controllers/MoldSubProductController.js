import Subproduct from '../models/Subproduct';

class MoldSubProductController {
  async store(req, res) {
    const { moldId } = req.params;
    const data = {
      ...req.body,
      mold_id: moldId,
      manufacturable: moldId && true,
    };
    const created = await Subproduct.create(data);

    return res.status(201).json(created);
  }

  async update(req, res) {
    const item = await Subproduct.findOne({ where: { id: req.params.id } });
    const itemUpdated = await item.update(req.body);

    return res.json(itemUpdated);
  }

  async index(req, res) {
    const { moldId } = req.params;
    const items = await Subproduct.findAll({
      where: { mold_id: moldId },
      // attributes: ['id', 'name', 'username', 'email', 'role', 'active'],
      // include: [
      //   {
      //     model: Customer,
      //     as: 'customer',
      //     // attributes: ['id', 'path', 'url'],
      //   },
      //   'products',
      // ],
      order: [['createdAt', 'DESC']],
    });
    return res.json(items);
  }

  async delete(req, res) {
    const { moldId, targetId } = req.params;
    await Subproduct.destroy({
      where: { id: targetId, mold_id: moldId },
    });
    return res.json({ message: 'success' });
  }
}

export default new MoldSubProductController();

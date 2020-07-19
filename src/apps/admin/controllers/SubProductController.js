import Subproduct from '../models/Subproduct';

class SubProductController {
  async store(req, res) {
    const data = {
      ...req.body,
      piecesPerCicle: 0,
      mold_id: null,
      manufacturable: false,
    };
    console.log(req.body);
    const created = await Subproduct.create(data);

    return res.status(201).json(created);
  }

  async update(req, res) {
    const item = await Subproduct.findOne({ where: { id: req.params.id } });
    const itemUpdated = await item.update(req.body);

    return res.json(itemUpdated);
  }

  async index(req, res) {
    const items = await Subproduct.findAll({
      // where: { mold_id: moldId },
      // attributes: ['id', 'name', 'username', 'email', 'role', 'active'],
      include: ['mold'],
      order: [['createdAt', 'DESC']],
    });
    return res.json(items);
  }

  async delete(req, res) {
    const { targetId } = req.params;
    await Subproduct.destroy({
      where: { id: targetId },
    });
    return res.json({ message: 'success' });
  }
}

export default new SubProductController();

import Rawmaterial from '../models/Rawmaterial';

class RawmaterialController {
  async store(req, res) {
    const created = await Rawmaterial.create(req.body);

    return res.status(201).json(created);
  }

  async update(req, res) {
    const item = await Rawmaterial.findOne({ where: { id: req.params.id } });
    const itemUpdated = await item.update(req.body);

    return res.json(itemUpdated);
  }

  async index(req, res) {
    const items = await Rawmaterial.findAll({
      attributes: ['id', 'name'],
      // include: ['subproducts'],
      order: [['createdAt', 'DESC']],
    });
    return res.json(items);
  }

  async delete(req, res) {
    const { id } = req.params;
    await Rawmaterial.destroy({
      where: { id },
    });
    return res.json({ message: 'success' });
  }
}

export default new RawmaterialController();

import Machine from '../../models/Machine';

class MachineController {
  async store(req, res) {
    // Default values
    req.body.active = false;

    const created = await Machine.create(req.body);

    return res.status(201).json(created);
  }

  async index(req, res) {
    const items = await Machine.findAll({
      // attributes: ['id', 'name'],
      // include: ['subproducts'],
      order: [
        ['active', 'DESC'],
        ['name', 'ASC'],
      ],
    });
    return res.json(items);
  }

  async update(req, res) {
    const { id } = req.params;

    const item = await Machine.findOne({
      where: { id },
      // include: ['subproducts'],
    });

    /* Checks to be performed when activating an item */
    // if (!item.active && req.body.active && CONDITION_HERE ) {
    //   return res.status(403).json({
    //     message: 'Impossible to activate item without ????.',
    //   });
    // }

    const itemUpdated = await item.update(req.body);

    return res.json(itemUpdated);
  }

  async delete(req, res) {
    const { id } = req.params;

    await Machine.destroy({
      where: { id },
    });
    return res.json({ message: 'success' });
  }
}

export default new MachineController();

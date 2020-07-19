import * as Yup from 'yup';
import Mold from '../models/Mold';

class MoldController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Validation failed for STORE Mold' });
    }

    req.body.active = false;

    const moldCreated = await Mold.create(req.body);

    return res.status(201).json(moldCreated);
  }

  async update(req, res) {
    const mold = await Mold.findOne({ where: { id: req.params.id } });
    const moldUpdated = await mold.update(req.body);

    return res.json(moldUpdated);
  }

  async index(req, res) {
    // TODO paginação
    if (!req.params.id) {
      const molds = await Mold.findAll({
        order: [
          ['active', 'DESC'],
          ['name', 'ASC'],
        ],
        include: ['subproducts'],
      });
      return res.json(molds);
    }
    const mold = await Mold.findOne({
      where: { active: true, id: req.params.id },
      /* include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'url', 'path'],
        },
      ], */
    });
    return res.json(mold);
  }

  async delete(req, res) {
    const { targetId } = req.params;
    // eslint-disable-next-line eqeqeq
    await Mold.destroy({
      where: { id: targetId },
    });
    return res.json({ message: 'success' });
  }
}

export default new MoldController();

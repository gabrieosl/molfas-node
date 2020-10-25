import Product from '../models/Product';

class RecipeController {
  async store(req, res) {
    const { productId } = req.params;
    const product = await Product.findByPk(productId);
    console.log(req.body);

    if (req.body.id) {
      // adicionar um item
      const created = await product.addSubproduct(parseInt(req.body.id, 10));
      return res.status(201).json(created);
    }

    // criar um item
    // default values
    req.body.piecesPerCicle = null;
    req.body.mold_id = null;
    req.body.manufacturable = false;
    const created = await product.createSubproduct(req.body);
    return res.status(201).json(created);

    // req.body.id = parseInt(req.body.id || '', 10);
  }

  async index(req, res) {
    const { productId } = req.params;
    const product = await Product.findByPk(productId);

    const items = await product.getSubproducts();
    return res.json(items);
  }

  async delete(req, res) {
    const { productId } = req.params;
    const targetId = parseInt(req.params.targetId, 10);
    const product = await Product.findByPk(productId);
    const deleted = await product.removeSubproduct(targetId);
    return res.json(deleted);
  }
}

export default new RecipeController();

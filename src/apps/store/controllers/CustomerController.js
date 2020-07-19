import Customer from '../models/Customer';

class CustomerController {
  async store(req, res) {
    // Default values
    req.body.active = true;

    const customer = await Customer.create(req.body);

    return res.status(201).json(customer);
  }

  /* async update(req, res) {
    const customer = await Customer.findOne({ where: { id: req.params.id } });
    const customerUpdated = await customer.update(req.body);

    return res.json(customerUpdated);
  } */
}

export default new CustomerController();

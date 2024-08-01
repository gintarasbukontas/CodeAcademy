import Joi from "joi";

const itemSchema = Joi.object({
  name: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  price: Joi.number().required(),
});

export function validateItem(req, res, next) {
  const { error } = itemSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
}

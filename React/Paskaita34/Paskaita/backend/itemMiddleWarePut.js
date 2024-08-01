import Joi from "joi";

const itemSchema = Joi.object({
  name: Joi.string().allow(""),
  quantity: Joi.number().integer().allow(""),
  price: Joi.number().allow(""),
});

export function validateItemPut(req, res, next) {
  const { error } = itemSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
}

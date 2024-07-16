import Joi from "joi";

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  publishedYear: Joi.number().integer().required(),
  genre: Joi.string().required(),
  rating: Joi.number().integer().min(1).max(5).optional(),
});

export function validateBook(req, res, next) {
  const { error } = bookSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
}

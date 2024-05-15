import Category from "../models/Category.js";

export async function addCategory(req, res) {
  const { title, description } = req.body;

  const newCategory = new Category({
    title,
    description,
  });

  await newCategory.save();

  res.json(newCategory);
}

export async function getCategories(req, res) {
  const categories = await Category.find();

  res.json(categories);
}

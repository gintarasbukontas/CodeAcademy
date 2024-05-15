import Product from "../models/Product.js";

export async function addProduct(req, res) {
  const { name, price, category } = req.body;

  const newProduct = new Product({
    name,
    price,
    category,
  });

  await newProduct.save();

  res.json(newProduct);
}

export async function getProducts(req, res) {
  const products = await Product.find();

  res.json(products);
}

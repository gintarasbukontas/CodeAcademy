import Phone from "../models/Phone.js";

export async function getPhones(req, res) {
  try {
    const phones = await Phone.find({});

    res.json(phones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPhoneById(req, res) {
  const { id } = req.params;

  try {
    const phone = await Phone.findById(id);

    res.json(phone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addPhone(req, res) {
  const { brand, model, price, year } = req.body;

  if (!brand || !model || !price || !year) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  const newPhone = new Phone({
    brand,
    model,
    price,
    year,
  });

  try {
    await newPhone.save();

    res.status(201).json(newPhone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updatePhoneById(req, res) {
  const { id } = req.params;
  const { brand, model, price, year } = req.body;

  try {
    const phone = await Phone.findById(id);

    if (!phone) {
      res.status(404).json({ error: `Phone by id: ${id} not found` });
      return;
    }

    phone.brand = brand;
    phone.model = model;
    phone.price = price;
    phone.year = year;

    await phone.save();

    res.status(200).json(phone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deletePhoneById(req, res) {
  const { id } = req.params;

  try {
    const response = await Phone.findByIdAndDelete(id);
    if (!response) {
      res.status(404).json({ error: `Phone by id: ${id} not found` });
      return;
    }
    res.json({ message: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

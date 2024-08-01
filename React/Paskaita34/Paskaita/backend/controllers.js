import Item from "./Item.js";

export async function getItems(req, res) {
  const { order } = req.params;

  if (!order) {
    try {
      const items = await Item.find();

      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  if (order === "asc") {
    try {
      const items = await Item.find().sort({ name: 1 });

      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  if (order === "desc") {
    try {
      const items = await Item.find().sort({ name: -1 });

      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  if (order === "lowestQuantity") {
    try {
      const items = await Item.find().sort({ quantity: 1 });

      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  if (order === "highestQuantity") {
    try {
      const items = await Item.find().sort({ quantity: -1 });

      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  if (order === "lowestPrice") {
    try {
      const items = await Item.find().sort({ price: 1 });

      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  if (order === "highestPrice") {
    try {
      const items = await Item.find().sort({ price: -1 });

      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export async function addItem(req, res) {
  const { name, quantity, price } = req.body;

  try {
    const newItem = new Item({
      name,
      quantity,
      price,
    });

    await newItem.save();

    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateItemById(req, res) {
  const { id } = req.params;
  const { name, quantity, price } = req.body;

  const item = await Item.findById(id);

  if (name) {
    item.name = name;
  }

  if (quantity) {
    item.quantity = quantity;
  }

  if (price) {
    item.price = price;
  }

  await item.save();

  res.json(item);
}

export async function deleteItemById(req, res) {
  const { id } = req.params;

  const item = await Item.findByIdAndDelete(id);

  res.json(item);
}

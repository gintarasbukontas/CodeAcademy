import Tablet from "../models/Tablet.js";

export async function getTablets(req, res) {
  const { page = 1, amount = 5, minPrice, maxPrice } = req.query;
  try {
    const tablets = await Tablet.find(
      {
        price: {
          $gte: minPrice,
          $lte: maxPrice,
        },
      },
      { __v: 0 }
    )
      .sort({
        brand: 1,
      })
      .limit(amount)
      .skip(amount * (page - 1));
    res.json(tablets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addTablet(req, res) {
  const { brand, model, price, year, screenSize } = req.body;

  if (!brand || !model || !price || !year || !screenSize) {
    res.status(400).json({ error: "Info missing in body" });
    return;
  }

  const newTablet = new Tablet({
    brand,
    model,
    price,
    year,
    screenSize,
  });

  try {
    await newTablet.save();
    res.status(201).json(newTablet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

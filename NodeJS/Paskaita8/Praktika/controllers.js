import Pet from "./models/Pet.js";

export async function addPet(req, res) {
  const { name, type, age } = req.body;

  if (!name || !type || !age) {
    res.status(400).json({ error: "Something missing in body" });
    return;
  }

  const newPet = new Pet({
    name,
    type,
    age,
  });

  try {
    await newPet.save();

    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPets(req, res) {
  try {
    const pets = await Pet.find({}).sort({ age: 1 });

    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPetsByType(req, res) {
  const { type } = req.params;

  try {
    const pets = await Pet.find({ type: type });

    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPetsByAgeFromOldest(req, res) {
  try {
    const pets = await Pet.find({}).sort({ age: -1 });

    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPetsByAgeAsc(req, res) {
  try {
    const pets = await Pet.find({}).sort({ age: 1 });

    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getPetsByAgeDesc(req, res) {
  try {
    const pets = await Pet.find({}).sort({ age: -1 });

    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

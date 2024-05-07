import Person from "./models/Person.js";

export async function getPeople(req, res) {
  try {
    const people = await Person.find({});

    res.json(people);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addPeople(req, res) {
  const { firstName, lastName, age } = req.body;

  if (!firstName || !lastName || !age) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  const newPerson = new Person({
    firstName,
    lastName,
    age,
  });

  try {
    await newPerson.save();

    res.status(201).json(newPerson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

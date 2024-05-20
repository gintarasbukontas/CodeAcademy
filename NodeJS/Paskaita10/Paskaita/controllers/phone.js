import Phone from "../models/Phone.js";
import Person from "../models/Person.js";

export async function addPhone(req, res) {
  const { brand, year } = req.body;

  const newPhone = new Phone({
    brand,
    year,
  });

  const person = await Person.findById("66439073815b7a50a58d0fb5");

  person.phone.push(newPhone);

  // await newPhone.save();
  await person.save();

  res.json(newPhone);
}

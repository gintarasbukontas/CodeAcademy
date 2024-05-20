import User from "../models/User.js";

export async function createUser(req, res) {
  const { name, surname, email, service_id, membership } = req.body;

  const newUser = new User({
    name,
    surname,
    email,
    service_id,
    membership,
  });

  await newUser.save();

  res.json(newUser);
}

export async function getUsers(req, res) {
  const { order } = req.params;

  if (order === "asc" || order === undefined) {
    const users = await User.find({}).populate("membership").sort({ name: 1 });
    res.json(users);
  } else {
    const users = await User.find({}).populate("membership").sort({ name: -1 });
    res.json(users);
  }
}

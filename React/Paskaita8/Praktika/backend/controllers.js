import User from "./User.js";

export async function getUsers(req, res) {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addUser(req, res) {
  const { name, username, email } = req.body;

  if (!name || !username || !email) {
    res.status(400).json({ error: "All fields required" });
    return;
  }

  try {
    const newUser = new User({
      name,
      username,
      email,
    });

    await newUser.save();

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

let users = [];

export function getUserController(req, res) {
  res.json(users);
}

export function addNewUser(req, res) {
  const name = req.body.name;
  const lastName = req.body.lastName;

  console.log(name);
  console.log(lastName);

  users.push({
    name: name,
    lastName: lastName,
  });

  res.json({
    success: true,
  });
}

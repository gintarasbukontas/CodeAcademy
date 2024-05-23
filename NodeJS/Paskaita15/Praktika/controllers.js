import db from "./db.js";

export async function addItem(req, res) {
  const { title } = req.body;

  if (title) {
    // jeigu body neturi title gauna errora, kad truksta informacijos Body skiltyje
    const { rows } = await db.query(
      `insert into items (title) values ('${title}') returning *`
    );

    res.json({ data: rows[0] });
  } else {
    res.status(400).json("Body missing information");
  }
}

export async function getItems(req, res) {
  const { limit } = req.query;

  let query = "select * from items ";

  if (limit !== undefined) {
    // jeigu nera limito rodo visus items, jeigu yra limitas rodo tiek kiek ivesta limit query
    query += `limit ${limit} `;
  }

  const { rows } = await db.query(query);
  res.json(rows);
}

export async function deleteItemById(req, res) {
  const { id } = req.params;

  if (id) {
    // jeigu params id ne optional tada gaunamas erroras, kad neegzistuoja toks route. Jeigu params id optional tada gauna response, kad neivestas ID
    const found = await db.query(`select * from items where id = ${id}`);

    if (found.rows[0] !== undefined) {
      const { rows } = await db.query(`select * from items where id = ${id}`);
      console.log(rows);
      res.json({ sucess: true });
    } else {
      res.status(404).json("Item with that ID doesn't exist");
    }
  } else {
    res.status(400).json("ID missing in params");
  }
}

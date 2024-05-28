import db from "./db.js";

export async function addCar(req, res) {
  const { title, image, price, numberplates } = req.body;

  if (!title || !image || !price || !numberplates) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    const { rows } = await db.query(
      `insert into cars (title, image, price, numberplates) values ('${title}', '${image}', ${price}, '${numberplates}') returning *`
    );

    res.json({ data: rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCars(req, res) {
  try {
    const { rows } = await db.query("select * from cars ");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getCarById(req, res) {
  const { id } = req.params;

  try {
    if (id) {
      const found = await db.query(`select * from cars where id = ${id}`);

      if (found.rows[0] !== undefined) {
        const { rows } = await db.query(`select * from cars where id = ${id}`);
        res.json(rows);
      } else {
        res.status(404).json("Car with entered ID doesn't exist");
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteCarById(req, res) {
  const { id } = req.params;

  try {
    if (id) {
      // jeigu params id ne optional tada gaunamas erroras, kad neegzistuoja toks route. Jeigu params id optional tada gauna response, kad neivestas ID
      const found = await db.query(`select * from cars where id = ${id}`);

      if (found.rows[0] !== undefined) {
        const { rows } = await db.query(`delete from cars where id = ${id}`);
        res.json({ sucess: true });
      } else {
        res.status(404).json("Car with entered ID doesn't exist");
      }
    } else {
      res.status(400).json("ID missing in params");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

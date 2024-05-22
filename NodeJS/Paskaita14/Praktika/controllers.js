import db from "./db.js";

export async function addShirt(req, res) {
  const { brand, model, size, price } = req.body;

  const { rows } = await db.query(
    `insert into shirts (brand, model, size, price) values ('${brand}', '${model}', '${size}', ${price}) returning *`
  );

  res.json({ data: rows[0] });
}

export async function getShirts(req, res) {
  const { size } = req.params;
  const { limit } = req.query;

  let query = "select * from shirts ";

  if (size !== undefined) {
    query += `where "size" = '${size}' order by price asc `;
  } else {
    query += "order by price asc ";
  }

  if (limit !== undefined) {
    query += `limit ${limit} `;
  }
  const { rows } = await db.query(query);
  res.json(rows);
}

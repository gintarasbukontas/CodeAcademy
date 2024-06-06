import db from "./db.js";

export async function addAttendee(req, res) {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    const { rows } = await db.query(
      `insert into attendees (name, email) values ('${name}', '${email}') returning *`
    );

    res.json({ data: rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAttendees(req, res) {
  try {
    const { rows } = await db.query("select * from attendees");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateAttendeeById(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    if (id) {
      const found = await db.query(`select * from attendees where id = ${id}`);

      if (!name || !email) {
        res.status(400).json({ error: "All fields are required" });
        return;
      }

      if (found.rows[0] !== undefined) {
        const response = await db.query(
          `update attendees set name = '${name}', email = '${email}' where id = ${id} returning *`
        );
        res.json({ success: true });
      } else {
        res.status(404).json("Attendee with entered ID doesn't exist");
      }
    } else {
      res.status(400).json("ID missing in params");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteAttendeeById(req, res) {
  const { id } = req.params;

  try {
    if (id) {
      const found = await db.query(`select * from attendees where id = ${id}`);

      if (found.rows[0] !== undefined) {
        const { rows } = await db.query(
          `delete from attendees where id = ${id}`
        );
        res.json({ success: true });
      } else {
        res.status(404).json("Attendee with entered ID doesn't exist");
      }
    } else {
      res.status(400).json("ID missing in params");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

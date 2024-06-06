import db from "./db.js";

export async function addEvent(req, res) {
  const { name, date, location, description } = req.body;

  if (!name || !date || !location || !description) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    const { rows } = await db.query(
      `insert into events (name, date, location, description) values ('${name}', '${date}', '${location}', '${description}') returning *`
    );

    res.json({ data: rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function addAttendeeToEvent(req, res) {
  const { event_id, attendee_id } = req.params;

  try {
    const { rows } = await db.query(
      `WITH updated_events AS (
        UPDATE events 
        SET attendee_ids = (${attendee_id}) 
        WHERE id = ${event_id} 
        RETURNING *
      ), updated_attendees AS (
        UPDATE attendees 
        SET event_id = (${event_id}) 
        WHERE id = ${attendee_id} 
        RETURNING *
      )
      SELECT * FROM updated_events, updated_attendees`
    );

    res.json({ data: rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getEvents(req, res) {
  const { limit, name } = req.query;

  try {
    if (name) {
      const found = await db.query(
        `select * from events where name = '${name}'`
      );

      if (found.rows[0] === undefined) {
        res.status(404).json("Event with entered name doesn't exist");
      }
    }

    let query = "select * from events ";

    if (name !== undefined) {
      query += `where name = '${name}' `;
    }

    if (limit !== undefined) {
      query += `limit ${limit} `;
    }

    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getEventById(req, res) {
  const { id } = req.params;

  try {
    let query = `select * from events where id = ${id}`;

    const { rows } = await db.query(query);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateEventById(req, res) {
  const { id } = req.params;
  const { name, date, location, description } = req.body;

  try {
    if (id) {
      const found = await db.query(`select * from events where id = ${id}`);

      if (!name || !date || !location || !description) {
        res.status(400).json({ error: "All fields are required" });
        return;
      }

      if (found.rows[0] !== undefined) {
        const response = await db.query(
          `update events set name = '${name}', date = '${date}', location = '${location}', description = '${description}' where id = ${id} returning *`
        );
        res.json({ success: true });
      } else {
        res.status(404).json("Event with entered ID doesn't exist");
      }
    } else {
      res.status(400).json("ID missing in params");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteEventById(req, res) {
  const { id } = req.params;

  try {
    if (id) {
      const found = await db.query(`select * from events where id = ${id}`);

      if (found.rows[0] !== undefined) {
        const { rows } = await db.query(`delete from events where id = ${id}`);
        res.json({ success: true });
      } else {
        res.status(404).json("Event with entered ID doesn't exist");
      }
    } else {
      res.status(400).json("ID missing in params");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteAttendeeFromEvent(req, res) {
  const { event_id, attendee_id } = req.params;

  try {
    const { rows } = await db.query(
      `UPDATE events
        SET attendee_ids = NULL
        WHERE id = ${event_id} AND attendee_ids = ${attendee_id}`
    );

    res.json({ data: rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

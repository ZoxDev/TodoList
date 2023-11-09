const app = require("express").Router();
const pool = require("../db");

//ROUTES//
// Get
app.get("", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");

    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Create
app.post("", async (req, res) => {
    try {
        const {title, description} = req.body;

        // Actualstate default false
        const sendTodo = await pool.query("INSERT INTO todo (title, description) VALUES($1,$2) RETURNING *", 
        [title, description]);

        res.json(sendTodo.rows[0]);    
    } catch (error) {
        console.error(error.message);
    }
});

// Update
app.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body;

        const updateTodo = await pool.query("UPDATE todo SET (title, description) = ($1,$2) WHERE id = $3",
        [title, description, id]);

        res.json("Todo was updated");
    } catch (error) {
        console.error(error.message);
    }
});

// Delete
app.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);

        res.json("Todo was deleted");
    } catch (error) {
        console.error(error.message);
    }
});

// Change state set to todo or set to doing
app.put("/:id/todo", async (req, res) => {
    try {
        const {id} = req.params;

        const updateTodo = await pool.query("UPDATE todo SET actualstate = false WHERE id = $1",
        [id]);

        res.json("Todo" + id + "was set to todo");
    } catch (error) {
        console.error(error.message);
    }
});

app.put("/:id/doing", async (req, res) => {
    try {
        const {id} = req.params;

        const updateTodo = await pool.query("UPDATE todo SET actualstate = true WHERE id = $1",
        [id]);

        res.json("Todo" + id + "was set to doing");
    } catch (error) {
        console.error(error.message);
    }
});

// Export route
module.exports = app;
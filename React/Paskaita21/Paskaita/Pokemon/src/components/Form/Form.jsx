import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

const API_LINK = "https://pokeapi.co/api/v2/pokemon";

export default function Form({ setPokemon }) {
  const [pokeName, setPokeName] = useState("");

  function getPokemon() {
    axios
      .get(`${API_LINK}/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
        console.log(response.data);
      })
      .catch(() => alert("Pokemon not found"));
  }

  function handleSubmit(e) {
    e.preventDefault();
    getPokemon();
  }

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Enter Pokemon Name"
          value={pokeName}
          onChange={(e) => setPokeName(e.target.value)}
        />
      </div>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
}

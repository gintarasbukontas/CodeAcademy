import { TextField, Button, Box, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function PokemonForm({ setPokemonData }) {
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.get(`${API_URL}/pokemon/${name}`);
      setPokemonData(response.data);
      console.log(response.data);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    }
  }

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
  }, [isSuccess]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        onSubmit={handleSubmit}
        component={"form"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <Button variant="outlined">Submit</Button>
      </Box>
      {isSuccess && (
        <Alert severity="success">Pokemon found successfully.</Alert>
      )}
      {isError && <Alert severity="error">Pokemon not found.</Alert>}
    </Box>
  );
}

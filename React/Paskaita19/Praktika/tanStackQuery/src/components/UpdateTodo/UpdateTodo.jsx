import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const API_HOST = "https://jsonplaceholder.typicode.com/todos";

export default function UpdateTodo() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isError, error } = useMutation({
    mutationFn: async (body) => {
      await axios.put(`${API_HOST}/${id}`, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] }); // pasakom kuriems query info pasenus kad is naujo pasiimtu (refechint)
    },
  });

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const requestBody = {
      id,
      status,
    };

    mutate(requestBody);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="idInput">Todo ID: </label>
        <input
          min={1}
          id="idInput"
          type="number"
          value={id}
          onChange={(e) => setId(+e.target.value)}
        />
        <br />
        <label htmlFor="statusInput">Todo Status (1 = true, 0 = false): </label>
        <input
          min={0}
          max={1}
          id="statusInput"
          type="number"
          value={status}
          onChange={(e) => {
            if (e.target.value === "0") {
              setStatus(false);
            }
            if (e.target.value === "1") {
              setStatus(true);
            }
          }}
        />
        <br />
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
}

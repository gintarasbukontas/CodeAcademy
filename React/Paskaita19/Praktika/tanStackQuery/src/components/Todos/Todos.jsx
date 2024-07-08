import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_HOST = "https://jsonplaceholder.typicode.com/todos";

export default function Todos() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await axios.get(API_HOST);
      return response.data;
    },
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{JSON.stringify(error.message)}</h1>;
  }

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

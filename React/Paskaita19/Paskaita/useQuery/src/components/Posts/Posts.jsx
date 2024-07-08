import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const API_HOST = "https://jsonplaceholder.typicode.com/posts";

export default function Posts() {
  // ------------------------------- senas budas --------------------
  //   const [posts, setPosts] = useState([]);
  //   const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  //   useEffect(() => {
  //     setIsLoadingPosts(true);
  //     axios
  //       .get(API_HOST)
  //       .then((response) => setPosts(response.data))
  //       .catch((err) => console.log(err))
  //       .finally(() => setIsLoadingPosts(false));
  //   }, []);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    retry: 1, // kiek kartu norim retryint requesta jei pafeilino, nes default buna kokie 4 kartai
    refetchOnWindowFocus: true, //refetchina data kai grizti i ta tab
    queryFn: async () => {
      const response = await axios.get(API_HOST);
      return response.data;
    },
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <pre>{JSON.stringify(error.message)}</pre>;
  }

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

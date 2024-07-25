import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function DataFetcher({ render }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(API_URL)
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => alert(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return render ? render({ posts, isLoading }) : null;
}

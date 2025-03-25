import { useQuery } from "react-query";
import axios from "axios";

const useFetchTodosQuery = () => {
  return useQuery("todos", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    return response.data;
  });
};

export default useFetchTodosQuery;

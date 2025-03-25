import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newTodo) => {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        newTodo
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};

export default useCreateTodoMutation;

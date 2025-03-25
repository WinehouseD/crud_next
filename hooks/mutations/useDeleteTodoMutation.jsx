import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};

export default useDeleteTodoMutation;

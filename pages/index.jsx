import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import useCreateTodoMutation from "../hooks/mutations/useCreateTodoMutation";
import useDeleteTodoMutation from "../hooks/mutations/useDeleteTodoMutation";
import useFetchTodosQuery from "../hooks/queries/useFetchTodoQuery";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const { data, isLoading, isError } = useFetchTodosQuery();

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

  const createTodoMutation = useCreateTodoMutation();
  const deleteTodoMutation = useDeleteTodoMutation();

  const handleCreateTodo = (newTodo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...newTodo }, ...prevTodos]);
    createTodoMutation.mutate(newTodo);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    deleteTodoMutation.mutate(id);
  };

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoForm createTodo={handleCreateTodo} isLoading={isLoading} />
      <TodoList todos={todos} deleteTodo={handleDeleteTodo} isError={isError} />
    </div>
  );
}

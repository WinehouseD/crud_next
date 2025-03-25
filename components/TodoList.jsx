import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo, isError }) {
  if (isError) {
    return (
      <div className="text-red-500">
        Error fetching todos. Please try again ☺
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default function TodoItem({ todo, deleteTodo }) {
  return (
    <li className="flex justify-between items-center p-4 bg-[var(--background-form)] text-[var(--main-color)] rounded-lg shadow-sm hover:shadow-md transition">
      <span>{todo.title}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>
    </li>
  );
}

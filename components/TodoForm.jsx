import { useState } from "react";

export default function TodoForm({ createTodo, isLoading }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      createTodo({ title, completed: false });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo"
          className="w-full px-4 py-2 bg-[var(--background-form)] text-var(--main-color) border border-gray-800 rounded-lg shadow-sm focus:border-primary"
          required
          disabled={isLoading}
        />
        <button
          type="submit"
          aria-label="Add TODO"
          className="px-6 py-2 bg-primary border border-[var(--accent-color)] text-[var( --main-color)] font-medium rounded-lg shadow-md hover:bg-[var(--accent-color)] transition"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Add"}
        </button>
      </div>
    </form>
  );
}

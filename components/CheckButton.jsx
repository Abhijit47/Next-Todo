"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckButton({ todoId, todo, checkTodo }) {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  async function handleCheckTodo(e) {
    setIsChecked(e.target.checked);

    await checkTodo(todoId, e.target.checked);
    router.refresh();
  }
  return (
    <div className="size-5">
      <input
        id={`todo-${todoId}`}
        name={`todo-${todoId}`}
        type="checkbox"
        checked={isChecked === false ? todo?.completed : isChecked}
        onChange={handleCheckTodo}
        className="size-full rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
    </div>
  );
}

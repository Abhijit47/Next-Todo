import { checkTodo, getTodos } from "@/lib/actions";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import CheckButton from "./CheckButton";
import { classNames } from "@/lib/helpers";

export default async function RightColumn() {
  const data = await getTodos();
  const todos = JSON.parse(data);

  return (
    <div className="grid grid-cols-1 gap-4 ">
      <section aria-labelledby="section-2-title">
        <h2 className="sr-only" id="section-2-title">
          Section title
        </h2>
        <div className="h-screen overflow-y-auto rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="rounded-lg border-4 border-dashed border-gray-200 p-4">
              <fieldset>
                <legend className="text-lg font-medium text-gray-900">
                  Todos
                </legend>
                <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
                  {todos?.reverse()?.map((todo) => (
                    <div
                      key={todo?._id}
                      className="relative flex items-center py-4"
                    >
                      <div className="min-w-0 flex-1 text-sm">
                        <label
                          htmlFor={`todo-${todo?._id}`}
                          className="select-none font-medium text-gray-700"
                        >
                          {todo?.title}
                        </label>
                        <p
                          className={classNames(
                            todo?.completed && "line-through",
                            "line-clamp-2 text-sm font-medium",
                          )}
                        >
                          {todo?.description}
                        </p>
                      </div>
                      <div className="ml-3 flex gap-x-2">
                        <CheckButton
                          todoId={todo?._id}
                          todo={todo}
                          checkTodo={checkTodo}
                        />
                        <EditButton todoId={todo?._id} todo={todo} />
                        <DeleteButton todoId={todo?._id} />
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

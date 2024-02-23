import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { editTodo } from "@/lib/actions";
import { HeroiconsOutlinePencilAlt } from "@/assets/icons";

export default function EditForm({ todo, onToogle }) {
  async function handleEdit(data) {
    const formData = JSON.stringify({
      title: data.get("title"),
      description: data.get("description"),
    });
    await editTodo(todo?._id, formData);
  }

  return (
    <div>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Image
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
              width={54}
              height={54}
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Edit Todo
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <Link
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {todo?._id}
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action={(data) => handleEdit(data)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="title" className="sr-only">
                  Todo title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="off"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your todo title"
                  defaultValue={todo?.title}
                />
              </div>
              <div>
                <label htmlFor="description" className="sr-only">
                  Todo description
                </label>

                <textarea
                  id="description"
                  name="description"
                  required
                  className="relative block w-full resize-y appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  rows="5"
                  placeholder="Enter your todo description"
                  defaultValue={todo?.description}
                ></textarea>
              </div>
            </div>

            <div>
              <Button
                ButtonIcon={HeroiconsOutlinePencilAlt}
                onToggle={onToogle}
              >
                Edit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

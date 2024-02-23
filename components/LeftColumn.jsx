import { createTodo } from "@/lib/actions";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { HeroiconsOutlinePencilAlt } from "@/assets/icons";

export default function LeftColumn() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:col-span-2">
      <section aria-labelledby="section-1-title">
        <h2 className="sr-only" id="section-1-title">
          Section title
        </h2>
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <div className="rounded-lg border-4 border-dashed border-gray-200">
              <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                  <Image
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                    width={54}
                    height={54}
                  />
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create Todos
                  </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                    <form
                      className="space-y-6"
                      action={async (formValue) => {
                        "use server";
                        const formData = {
                          title: formValue.get("title"),
                          description: formValue.get("description"),
                        };
                        await createTodo(JSON.stringify(formData));
                        revalidatePath("/todos", "page");
                      }}
                    >
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <div className="mt-1">
                          <input
                            id="title"
                            name="title"
                            type="text"
                            autoComplete="off"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            defaultValue={""}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <div className="mt-1">
                          <textarea
                            rows={4}
                            name="description"
                            id="description"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            defaultValue={""}
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Create todo
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

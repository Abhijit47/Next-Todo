import { HeroiconsOutlineX } from "@/assets/icons";
import { deleteTodo } from "@/lib/actions";
import { revalidatePath } from "next/cache";

export default function DeleteButton({ todoId }) {
  return (
    <form
      action={async () => {
        "use server";
        await deleteTodo(todoId);
        revalidatePath("/todos", "page");
      }}
      className="size-6"
    >
      <button
        type="submit"
        className="size-full rounded-md text-sm font-medium text-red-500 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <HeroiconsOutlineX className="size-6" />
      </button>
    </form>
  );
}

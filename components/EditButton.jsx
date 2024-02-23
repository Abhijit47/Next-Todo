"use client";

import { useState } from "react";
import EditFormModal from "./EditFormModal";
import { HeroiconsOutlinePencilAlt } from "@/assets/icons";

export default function EditButton({ todo }) {
  let [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="size-6">
      <button
        type="button"
        onClick={toggleModal}
        className="size-full rounded-md text-sm font-medium text-black/20 text-stone-400 hover:text-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <HeroiconsOutlinePencilAlt className="size-6" />
      </button>

      <EditFormModal isOpen={isOpen} toggleModal={toggleModal} todo={todo} />
    </div>
  );
}

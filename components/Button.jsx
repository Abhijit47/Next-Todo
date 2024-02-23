"use client";

export default function Button({ children, onToggle, ButtonIcon }) {
  return (
    <div>
      <button
        type="submit"
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={onToggle}
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <ButtonIcon
            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            aria-hidden="true"
          />
        </span>
        {children}
      </button>
    </div>
  );
}

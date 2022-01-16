import clsxm from "@/lib/clsxm";

export default function Header() {
  return (
    <header
      className={clsxm(
        "py-4 border-b border-b-gray-300 flex justify-center items-center"
      )}
    >
      <h1 className={clsxm("text-xl mr-auto font-bold uppercase")}>
        Wordle ID
      </h1>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </header>
  );
}

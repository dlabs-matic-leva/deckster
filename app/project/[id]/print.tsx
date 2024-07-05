"use client";

export default function Print() {
  return (
    <button
      className="rounded-lg bg-indigo-600 px-6 py-3 text-white text-lg mb-10 print:hidden"
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
    >
      Download proposal
    </button>
  );
}

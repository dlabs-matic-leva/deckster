"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import { redirect } from "next/navigation";
import { generateProposal } from "./generate-proposal";

export default function NewProposal() {
  return (
    <>
      <div className="flex gap-1 text-2xs text-muted-foreground mt-7">
        <Link href="/">Home</Link>
      </div>
      <h1 className="mt-3 mb-10 text-2xl/9">New proposal</h1>
      <form
        action={async (data: FormData) => {
          const id = await generateProposal(data);
          redirect(`/project/${id}`);
        }}
      >
        <label className="block mb-6">
          <span className="block mb-1">Name</span>
          <input
            type="text"
            name="name"
            required
            className="border rounded-lg px-2 py-2"
          />
        </label>
        <Button />
      </form>
    </>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="rounded-lg bg-indigo-600 px-3 py-1 text-white font-medium leading-9
      disabled:animate-pulse disabled:hover:bg-indigo-300 disabled:hover:cursor-not-allowed"
      disabled={pending}
    >
      Generate proposal
    </button>
  );
}

"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import { redirect } from "next/navigation";
import { generateProposal } from "./generate-proposal";
import { useState } from "react";

export default function NewProposal() {
  const [counter, setCounter] = useState<string[]>(["23432"]);
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
        className="max-w-[500px] w-full m-auto flex flex-col items-stretch mt-20"
      >
        <label className="block mb-6">
          <span className="block mb-1">Name</span>
          <input
            type="text"
            name="name"
            required
            className="border rounded-lg px-2 py-2 w-full"
          />
        </label>
        <label className="block mb-6">
          <span className="block mb-1">Call transcripts</span>
          <div className="flex flex-col gap-1">
            {counter.map((id, index) => (
              <div key={id}>
                <input
                  type="text"
                  name="transcript"
                  required
                  className="border rounded-lg px-2 py-2 w-full"
                />
                {counter.length > 1 && (
                  <button
                    type={"button"}
                    className="px-3 py-1 text-indigo-500"
                    onClick={() => {
                      setCounter((prevState) =>
                        prevState.filter((_, i) => i !== index),
                      );
                    }}
                  >
                    -
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={function () {
              setCounter((prevState) => [
                ...prevState,
                Math.random().toString(),
              ]);
            }}
            className="px-3 py-1 text-indigo-500"
          >
            Add transcript
          </button>
        </label>
        <label className="block mb-6">
          <span className="block mb-1">Additional information</span>
          <textarea
            name="info"
            rows={4}
            className="border rounded-lg px-2 py-2 w-full"
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

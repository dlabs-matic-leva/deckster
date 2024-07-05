"use server";

import { transcript } from "./transcript";

export async function generateProposal(data: FormData) {
  const res = await fetch("https://j0ikko.buildship.run/proposals/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.get("name"),
      message: transcript,
    }),
  });
  return res.json().then((body) => body.id);
}

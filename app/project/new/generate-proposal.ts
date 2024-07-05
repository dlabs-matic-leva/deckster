"use server";

import { transcript } from "./transcript";

export async function generateProposal(data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return "KGbXCqtfwCO0X9DV1pXD";
  const res = await fetch("https://j0ikko.buildship.run/create", {
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

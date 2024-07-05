"use server";

export async function generateProposal(data: FormData) {
  let message = data.getAll("transcript").join("\n\n");
  const info = data.get("info");
  if (info)
    message = `These are transcripts\n\n${message}\n\nAnd this is additional info\n\n${info}`;

  const res = await fetch("https://j0ikko.buildship.run/proposals/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.get("name"),
      message: message,
    }),
  });
  return res.json().then((body) => body.id);
}

"use server";

export async function getProposal(
  id: string,
): Promise<{ name: string; proposal: string; createdAt: string; id: string }> {
  const res = await fetch(
    `https://j0ikko.buildship.run/proposals/get?id=${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return res.json().then((body) => body.data);
}

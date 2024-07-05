"use server";

type Proposal = {
  name: string;
  proposal: string;
  createdAt: string;
};

export async function getProposals(): Promise<
  { id: string; data: Proposal }[]
> {
  const res = await fetch(`https://j0ikko.buildship.run/proposals/getall`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

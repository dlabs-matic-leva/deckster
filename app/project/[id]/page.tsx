import Link from "next/link";
import { getProposal } from "@/app/project/[id]/get-proposal";

export default async function PreviewProposal({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getProposal(id);
  return (
    <>
      <div className="flex gap-1 text-2xs text-muted-foreground mt-7">
        <Link href="/">Home</Link>
      </div>
      <h1 className="mt-3 mb-10 text-2xl/9">Butterflye proposal</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

import Link from "next/link";

export default async function Loading() {
  return (
    <>
      <div className="flex gap-1 text-2xs text-muted-foreground mt-7">
        <Link href="/">Home</Link>
      </div>
      <h1 className="mt-3 mb-10 text-2xl/9">Butterflye proposal</h1>
    </>
  );
}

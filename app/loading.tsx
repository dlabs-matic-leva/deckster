import Link from "next/link";
import Image from "next/image";
import plusCircle from "@/components/icons/plus-circle.svg";

export default async function Loading() {
  return (
    <>
      <h1 className="mt-14 mb-10 text-2xl/9">Projects</h1>

      <div className="mb-10 flex gap-6">
        <Link
          className=" flex items-center gap-3 rounded-lg border p-3 pr-12"
          href="/project/new"
        >
          <Image priority src={plusCircle} alt="New Proposal" />
          <div className="flex-1">
            <p className="text-md/6">New proposal</p>
            <p className="text-sm/4 text-slate-500 mt-1">
              Use AI to generate proposal
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

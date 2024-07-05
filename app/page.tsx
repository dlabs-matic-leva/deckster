import Image from "next/image";
import plusCircle from "../components/icons/plus-circle.svg";
import proposalImage from "../components/images/d9b9ffd87d75c34379599275085d6941.png";
import Link from "next/link";
import { getProposals } from "@/app/get-proposals";

export default async function Home() {
  const data = await getProposals();
  console.log(JSON.stringify(data, null, 2));
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

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map(({ id, data: { name, createdAt } }, index) => (
          <Link
            className="flex flex-col rounded-lg border p-2"
            key={index}
            href={`/project/${id}`}
          >
            <Image
              priority
              src={proposalImage}
              alt="New Proposal"
              className="rounded-lg"
            />
            <p className="font-medium text-sm/4 mt-4">{name}</p>
            <p className="text-2xs/4 text-slate-500 mt-1">
              Created on{" "}
              {(() => {
                const date = new Date();
                date.setTime(Date.parse(createdAt));
                return date.toLocaleDateString("en-UK", {
                  month: "long",
                  day: "numeric",
                });
              })()}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}

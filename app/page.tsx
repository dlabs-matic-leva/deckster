import Image from "next/image";
import plusCircle from "../components/icons/plus-circle.svg";
import proposalImage from "../components/images/d9b9ffd87d75c34379599275085d6941.png";
import Link from "next/link";

export default function Home() {
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
        {new Array(6)
          .fill({ id: "5e94246e-ab03-4f6d-a20c-ceff17d32abb" })
          .map(({ id }, index) => (
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
              <p className="font-medium text-sm/4 mt-4">Butterflye proposal</p>
              <p className="text-2xs/4 text-slate-500 mt-1">
                Updated 12 minutes ago
              </p>
            </Link>
          ))}
      </div>
    </>
  );
}

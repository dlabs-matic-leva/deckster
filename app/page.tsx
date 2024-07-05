import Image from "next/image";
import plusCircle from "../components/icons/plus-circle.svg";
import logo from "../components/icons/logo.svg";
import bell from "../components/icons/bell.svg";
import proposalImage from "../components/images/d9b9ffd87d75c34379599275085d6941.png";
import profile from "../components/images/1654256336528 1.png";

export default function Home() {
  return (
    <main className="flex min0-h-screen flex-col items-start justify-start p-24">
      <div className="flex w-full justify-between mb-14">
        <Image priority src={logo} alt="Deckster logo" />
        <div className="flex gap-3">
          <div className="border rounded-full p-1 pr-4 flex gap-2 items-center">
            <Image
              priority
              width={32}
              height={32}
              src={profile}
              alt="Profile picture"
              className="rounded-full"
            />
            <div className="text-sm/4">matic.leva@dlabs.si</div>
          </div>
          <div className="border rounded-full p-2 ">
            <Image priority src={bell} alt="Notifications" />
          </div>
        </div>
      </div>

      <h1 className="mb-10 text-2xl/9">Projects</h1>

      <div className="mb-10 flex gap-6">
        <div className=" flex items-center gap-3 rounded-lg border p-3 pr-12">
          <Image priority src={plusCircle} alt="New Proposal" />
          <div className="flex-1">
            <p className="text-md/6">New proposal</p>
            <p className="text-sm/4 text-slate-500 mt-1">
              Use AI to generate proposal
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {new Array(6).fill(0).map((_, index) => (
          <div className="flex flex-col rounded-lg border p-2">
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
          </div>
        ))}
      </div>
    </main>
  );
}

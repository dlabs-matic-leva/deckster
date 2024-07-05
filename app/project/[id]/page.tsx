import Link from "next/link";
import Image from "next/image";
import { getProposal } from "@/app/project/[id]/get-proposal";
import logo from "./dlabs.svg";
import coverPage from "@/components/images/A4 - 10.svg";
import coverPage3 from "@/components/images/A4 - 3.png";
import coverPage4 from "@/components/images/A4 - 4.png";
import coverPage5 from "@/components/images/A4 - 5.png";
import coverPage6 from "@/components/images/A4 - 6.png";
import endPage from "@/components/images/A4 - 11.png";
import asterisk from "@/components/icons/asterisk.svg";
import arrow from "@/components/icons/arrow.svg";
import price from "@/components/icons/price.svg";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Print from "./print";

export default async function PreviewProposal({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getProposal(id);
  const proposal = JSON.parse(data.proposal);
  return (
    <>
      <div className="flex gap-1 text-2xs text-muted-foreground mt-7 print:hidden">
        <Link href="/">Home</Link>
      </div>
      <h1 className="mt-3 mb-10 text-2xl/9 print:hidden">{data.name}</h1>
      <div className="flex justify-end print:hidden">
        <Print />
      </div>
      <div className="flex flex-col gap-10 w-full print:gap-0">
        <Page noPadding className={"relative"}>
          <Image
            src={coverPage}
            alt={"Cover page"}
            className="w-full aspect-a4"
          />
          <div className="absolute font-platform text-3xl text-white top-[66%] left-[7%]">
            {data.name}
          </div>
          <div className="absolute font-platform text-2xl text-white top-[92.5%] right-[6%]">
            {(() => {
              const date = new Date();
              date.setTime(Date.parse(data.createdAt));
              return date.toLocaleDateString("en-UK", {
                year: "numeric",
                month: "long",
              });
            })()}
          </div>
        </Page>
        <Page noPadding>
          <Image
            src={coverPage3}
            alt={"Cover page"}
            className="w-full aspect-a4"
          />
        </Page>
        <Page noPadding>
          <Image
            src={coverPage4}
            alt={"Cover page"}
            className="w-full aspect-a4"
          />
        </Page>
        <Page noPadding>
          <Image
            src={coverPage5}
            alt={"Cover page"}
            className="w-full aspect-a4"
          />
        </Page>
        <Page noPadding>
          <Image
            src={coverPage6}
            alt={"Cover page"}
            className="w-full aspect-a4"
          />
        </Page>
        <Page>
          <div className="flex justify-between text-sm text-gray-900">
            <span>Approach Proposal</span>
            <span>{data.name}</span>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-medium mt-24 mb-20 font-platform">
              Background
            </h1>
            <p className="font-platform text-xl leading-7">
              {proposal.background.overview}
            </p>
            <hr className="border-black mt-16 mb-8" />
            <h2 className="leading-6 text-lg font-semibold">Challenges</h2>
            <ul className="mt-4">
              {proposal.background.challenges.map((challenge: string) => (
                <Li key={challenge}>{challenge}</Li>
              ))}
            </ul>
            <hr className="border-black my-8" />
            <h2 className="leading-6 text-lg font-semibold">Opportunities</h2>
            <ul className="mt-4">
              {proposal.background.opportunities.map((opportunity: string) => (
                <Li key={opportunity}>{opportunity}</Li>
              ))}
            </ul>

            <hr className="border-black my-8" />
          </div>
          <Image priority src={logo} alt="Dlabs logo" />
        </Page>
        <Page>
          <div className="flex justify-between text-sm text-gray-900">
            <span>Approach Proposal</span>
            <span>{data.name}</span>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-medium mt-24 mb-20 font-platform">
              Project goals
            </h1>
            <p className="font-platform text-xl leading-7">
              {proposal.projectGoal.overview}
            </p>
            <hr className="border-black mt-16 mb-8" />
            <h2 className="leading-6 text-lg font-semibold">Objectives</h2>
            <ul className="mt-4">
              {proposal.projectGoal.objectives.map((objective: string) => (
                <Li key={objective}>{objective}</Li>
              ))}
            </ul>

            <hr className="border-black my-8" />
          </div>
          <Image priority src={logo} alt="Dlabs logo" />
        </Page>
        <Page>
          <div className="flex justify-between text-sm text-gray-900">
            <span>Approach Proposal</span>
            <span>{data.name}</span>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-medium mt-24 mb-20 font-platform">
              Key Project Details
            </h1>
            <p className="font-platform text-xl leading-7">
              {proposal.projectGoal.overview}
            </p>
            <hr className="border-black mt-16 mb-8" />
            <h2 className="leading-6 text-lg font-semibold">Deliverables</h2>
            <ul className="mt-4">
              {proposal.keyProjectDetails.deliverables.map(
                (deliverable: string) => (
                  <Li key={deliverable}>{deliverable}</Li>
                ),
              )}
            </ul>

            <hr className="border-black my-8" />
          </div>
          <Image priority src={logo} alt="Dlabs logo" />
        </Page>
        <Page>
          <div className="flex justify-between text-sm text-gray-900">
            <span>Approach Proposal</span>
            <span>{data.name}</span>
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-medium mt-24 mb-20 font-platform">
              Commercials
            </h1>
            <p className="font-platform text-xl leading-7 mb-16">
              {proposal.commercials.overview}
            </p>
            {proposal.commercials.phases.map(
              (phase: { duration: string; price: string }, index: number) => (
                <>
                  <hr className="border-black my-6" />

                  <h2 className="leading-6 text-lg font-semibold">
                    Phase {index + 1}
                  </h2>
                  <div className="grid grid-cols-2 gap-1 mt-4">
                    <div className="flex align-center gap-3 text-gray-900">
                      <Image src={arrow} alt={"arrow"} /> Duration
                    </div>
                    <div className="flex align-center gap-3 text-gray-900">
                      <Image src={price} alt={"price"} /> Price
                    </div>
                    <div className="font-platform text-xl/8">
                      {phase.duration}
                    </div>
                    <div className="font-platform text-xl/8">{phase.price}</div>
                  </div>
                </>
              ),
            )}
            <hr className="border-black mt-6 mb-8" />
            <h2 className="leading-6 text-lg font-semibold">Deliverables</h2>
            <ul className="mt-4">
              {proposal.keyProjectDetails.deliverables.map(
                (deliverable: string) => (
                  <Li key={deliverable}>{deliverable}</Li>
                ),
              )}
            </ul>

            <hr className="border-black my-8" />
          </div>
          <Image priority src={logo} alt="Dlabs logo" />
        </Page>
        <Page noPadding>
          <Image
            src={endPage}
            alt={"End page"}
            className={"w-full aspect-a4"}
          />
        </Page>
      </div>
    </>
  );
}

function Page({
  children,
  className,
  noPadding = false,
}: {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}) {
  return (
    <div
      className={cn([
        className,
        "aspect-a4 w-full p-10 drop-shadow-xl bg-white flex flex-col print:drop-shadow-0 overflow-hidden",
        { "p-0": noPadding },
      ])}
    >
      {children}
    </div>
  );
}

function Li({ children }: { children: ReactNode }) {
  return (
    <li className="mt-4 leading-6">
      <Image
        src={asterisk}
        alt="asterisk"
        className="inline-block align-top mr-2 pt-1"
      />
      {children}
    </li>
  );
}

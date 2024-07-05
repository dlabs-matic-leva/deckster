"use server";

export async function getProposal(
  id: string,
): Promise<{ name: string; proposal: string; createdAt: string; id: string }> {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // return {
  //   background:
  //     "<ul><li>Client: ProfiCircle</li><li>Vision: Help companies streamline fit-out processes to finalize faster, cheaper, and find better solutions using AI.</li><li>Challenges: Current design and quoting system takes days to weeks; market education about new platform; scaling issues; identifying project managers for quicker onboarding.</li></ul>",
  //   project_goal:
  //     "<ul><li>Primary Objective: To significantly reduce the time taken for design and quoting processes from days/weeks to a matter of hours using AI.</li></ul>",
  //   key_project_details:
  //     "<ul><li>Team Setup: Product Manager, AI Engineer, Senior Engineer.</li><li>Delivery Plan: Optimize existing design and quoting processes by integrating AI for faster RFQ creation and layout generation.</li><li>Project Management: Implement streamlined, AI-driven processes for quicker client onboarding.</li></ul>",
  //   commercials:
  //     "<ul><li>Monthly Retainer Fee: €33,000 per month</li><li>Team Composition: 1 FTE (€11,000) + 2x Engineers (2x €11,000) = €33,000</li><li>Retainer Includes: Full access to proposed team of experts, ongoing AI integration support, and project management consultation.</li></ul>",
  // };
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

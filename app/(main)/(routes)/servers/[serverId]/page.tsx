import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface ServerIdPageProps {
  params: { serverId: string };
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return <RedirectToSignIn />;
  }
  console.log("inside ServerId")
  console.log(await params);
  

  const server = await db.server.findFirst({
    where: {
      id: (await params).serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
    include: {
      channels: {
        where: {
          name: "general",
        }
      },
    },
  });
  console.log(server);


  const initialChannel = server?.channels[0];

  // If there is no general channel, return null
  if (!initialChannel || initialChannel.name !== "general") {
    return null;
  }

  // Redirect to the general channel
  return redirect(`/servers/${params.serverId}/channels/${initialChannel.id}`);
};
export default ServerIdPage;

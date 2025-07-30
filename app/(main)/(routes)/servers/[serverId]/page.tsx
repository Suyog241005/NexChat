import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface ServerIdPageProps {
  params: Promise<{ serverId: string }>;
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  const profile = await currentProfile();
  const {serverId} = await params

  if (!profile) {
    return <RedirectToSignIn />;
  }

  const server = await db.server.findFirst({
    where: {
      id: serverId,
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
  return redirect(`/servers/${serverId}/channels/${initialChannel.id}`);
};
export default ServerIdPage;

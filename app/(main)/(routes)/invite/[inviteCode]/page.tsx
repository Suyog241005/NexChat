import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";


interface InvitePageProps {

  params: {
    inviteCode: string;
  }
}

const InvitePage = async ({ params }: InvitePageProps) => {
  console.log("InvitePage");
  
  const profile = await currentProfile();
  if (!profile) {
    return <RedirectToSignIn />;
  }
  console.log("Profile", profile);
  

  if (!(await params).inviteCode) {
    return redirect("/");
  }

  const inviteCode = (await params).inviteCode
  console.log("InviteCode", inviteCode);
  

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: inviteCode,
      members: {
        some: {
          profileId: profile.id,

        }
      }
    }
  })
  console.log("ExistingServer", existingServer);
  

  if (existingServer) {
    return redirect(`/servers/${existingServer.id}`);
  }
  const server =  await db.server.update({
    where: {
    inviteCode: inviteCode,

  },
    data: {
    members: {
      create: [{
        profileId: profile.id,
      }]
    }
  }
})
console.log("Server", server);


if(server) {
  console.log("Server Found", server);
  
  return redirect(`/servers/${server.id}`);
}

  return null;
}

export default InvitePage;
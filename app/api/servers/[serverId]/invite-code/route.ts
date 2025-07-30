import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { v4 as _uuidv4 } from "uuid";

export async function PATCH(
  req: Request,
  {params}: {params: {serverId: string}}
) {
  try {
    const profile = await currentProfile();
    if (!profile) {
      return new NextResponse("Unauthorized", {status: 401});
    }

    const {serverId} = await params;
    if (!serverId) {
      return new NextResponse("Server ID is required", {status: 400});
    }

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: profile.id,
      },
      data:{
        inviteCode: _uuidv4(),
      }
    });

    return NextResponse.json(server);
  }catch (error) {
    console.log("[SERVER_ID_INVITE_CODE]", error);
    return new NextResponse("Internal Error", {status: 500});
  }
}
"use server";

import prisma from "@/lib/db";
import { Endorsement } from "@/types/Endorsement";

async function getEndorsement(): Promise<{
  endorsement?: Endorsement[];
  error?: string;
}> {
  try {
    const endorsement = await prisma.endorsement.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return { endorsement };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default getEndorsement;

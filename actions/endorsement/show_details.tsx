"use server";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export default async function ShowDetails({
  endorsementId,
}: {
  endorsementId: string;
}) {
  const data = await prisma.endorsement.findUnique({
    where: {
      id: endorsementId,
    },
  });
  return data;
}

"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function BatchUploadingCsv(csvData: string) {
  csvData.map((i) => {
    i["authorId"] = "clxjyjta00000awm8324a2rro";
  });

  await prisma.endorsement.createMany({
    data: csvData,
  });

  revalidatePath("/endorsement");
}

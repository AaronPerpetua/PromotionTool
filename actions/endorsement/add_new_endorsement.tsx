"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function add_new_endorsement(e: FormData) {
  //for update where authorid is equal to the active user
  await prisma.endorsement.create({
    data: {
      first_name: e.get("first_name") as string,
      last_name: e.get("last_name") as string,
      department: "Finance",
      status: "Pending",
      authorId: "clxjyjta00000awm8324a2rro",
    },
  });

  revalidatePath("/endorsement");
}

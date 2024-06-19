"use server";

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function add_new_endorsement(e: FormData) {
  await prisma.endorsement.create({
    data: {
      first_name: e.get("first_name") as string,
      last_name: e.get("last_name") as string,
      department: "Finance",
      status: "Pending",
      authorId: "clxjyjta00000awm8324a2rro",
    },
  });
}

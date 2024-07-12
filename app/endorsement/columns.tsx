"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { EndorsementDetails } from "./details";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Endorsements = {
  id: string;
  first_name: string;
  last_name: string;
  department: string;
  status: string;
  author: string;
};

export const columns: ColumnDef<Endorsements>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "author.name",
    header: "Manager",
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const endorsement = row.original;
      return (
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>
            <EndorsementDetails endorsementId={endorsement.id} />
          </div>
          <Separator orientation="vertical" />
          <div>
            <Link href={`/endorsement/${endorsement.id}`}>
              <Button variant="outline">details</Button>
            </Link>
          </div>
          <Separator orientation="vertical" />
          <div>Remove</div>
        </div>
      );
    },
  },
];

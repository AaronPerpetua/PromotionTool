import { DataTableDemo } from "@/components/data-table";
import { Header } from "@/components/header";
import { NewEndorsementButton } from "@/components/new_endorsement_button";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

import { Endorsements, columns } from "./columns";
import { DataTable } from "./data-table";
import { Suspense } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BatchUploadCsv } from "./batch-upload";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductTable from "./product-table";
import getEndorsement from "@/actions/endorsement/getEndorsement";

export default async function Endorsement() {
  const data = await prisma.endorsement.findMany({
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

  return (
    <>
      <Header />

      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:p-5 bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Endorsement</h1>

          <div className="flex items-center">
            {/* tablist */}
            <div className="ml-auto flex items-center gap-2">
              {/* <File className="h-3.5 w-3.5" /> */}

              <BatchUploadCsv />

              <NewEndorsementButton />
            </div>
          </div>
          <Suspense fallback="Loading">
            {/* <DataTable columns={columns} data={data} /> */}
            <ProductTable data={data} />
          </Suspense>
        </div>
      </main>
    </>
  );
}

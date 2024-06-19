import { DataTableDemo } from "@/components/data-table";
import { Header } from "@/components/header";
import { NewEndorsementButton } from "@/components/new_endorsement_button";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

export default function Endorsement() {
  return (
    <>
      <Header />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:p-10 bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Endorsement</h1>
          <div className="flex items-center">
            {/* <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList> */}
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                {/* <File className="h-3.5 w-3.5" /> */}
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Batch Upload
                </span>
              </Button>
              <NewEndorsementButton />
            </div>
          </div>
          <DataTableDemo />
        </div>
      </main>
    </>
  );
}

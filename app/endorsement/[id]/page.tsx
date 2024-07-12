import prisma from "@/lib/db";

export default async function EndorsementDetailsView({
  params,
}: {
  params: { slug: string };
}) {
  const data = await prisma.endorsement.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!data) {
    return (
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:p-10 bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">No Data Found</h1>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:p-10 bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">{data.id}</h1>
        </div>
      </main>
    </>
  );
}

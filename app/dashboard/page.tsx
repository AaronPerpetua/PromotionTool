 
import { DataTableDemo } from "@/components/data-table";
import { Header } from "@/components/header";
 
        

export default function Dashboard() {

  return (
    <>
      <Header />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:p-10 bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
     
        </div>
      </main>
    </>
  );
}

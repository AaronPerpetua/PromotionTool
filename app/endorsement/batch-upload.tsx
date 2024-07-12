"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefObject, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useFormStatus } from "react-dom";
import Papa from "papaparse";
import prisma from "@/lib/db";
import { BatchUploadingCsv } from "@/actions/endorsement/batch_uploading_csv";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      Submit
    </Button>
  );
}

export function BatchUploadCsv() {
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const [jsonData, setJsonData] = useState([]);

  const handleFileChange = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    const fileType = file.name.split(".").pop().toLowerCase();
    if (fileType !== "csv") {
      alert("Please upload a CSV file.");
      return;
    }
    Papa.parse(file, {
      complete: (result: { data: React.SetStateAction<never[]> }) => {
        setCsvData(result.data);
      },
      header: true,
      skipEmptyLines: true,
    });
  };

  const handleAction = async (e: FormData) => {
    try {
      await BatchUploadingCsv(csvData);

      formRef?.current?.reset();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Bath Upload</Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Upload Endorsement File</DialogTitle>
          <DialogDescription>
            Please use this <u>CSV template file </u> as your attachement.
          </DialogDescription>
        </DialogHeader>
        <form action={handleAction}>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input id="csvfile" type="file" onChange={handleFileChange} />
          </div>

          <DialogFooter>
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

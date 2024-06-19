"use client";

import { add_new_endorsement } from "@/actions/endorsement/add_new_endorsement";
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

export function NewEndorsementButton() {
  const formRef = useRef() as RefObject<HTMLFormElement>;
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  const handleAction = async (e: FormData) => {
    try {
      const m = await add_new_endorsement(e);
      toast({
        description: "Endorsement Successfully Added.",
      });
      formRef?.current?.reset();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">New</Button>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form action={handleAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="first_name" className="text-right">
                First Name
              </Label>
              <Input id="first_name" name="first_name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="last_name" className="text-right">
                Last Name
              </Label>
              <Input id="last_name" name="last_name" className="col-span-3" />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

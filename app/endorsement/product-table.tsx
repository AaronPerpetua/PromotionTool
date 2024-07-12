"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Endorsement } from "@/types/Endorsement";

export default function ProductTable({ data }) {
  //   const [products, setProducts] = useState<Product[]>([]);

  const endorsement = JSON.parse(JSON.stringify(data));

  const dateBodyTemplate = (rowData: {
    createdAt: any;
    toLocaleDateString: (
      arg0: string,
      arg1: { day: string; month: string; year: string }
    ) => any;
  }) => {
    const value = rowData.createdAt;
    const formatedDate = moment(value).format("DD-MM-YYYY hh:mm:ss");
    return formatedDate;
  };

  return (
    <Card>
      <CardHeader>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          value={endorsement}
          tableStyle={{ minWidth: "10rem" }}
          size="small"
          paginator
          stripedRows
          rows={10}
          scrollable
          scrollHeight="345px"
        >
          <Column field="id" header="Code"></Column>
          <Column field="first_name" header="First Name"></Column>
          <Column field="last_name" header="Last Name"></Column>
          <Column field="department" header="Category"></Column>
          <Column field="status" sortable header="Status"></Column>
          <Column
            field="createdAt"
            sortable
            header="Date Endorse"
            dataType="date"
            body={dateBodyTemplate}
          ></Column>
          <Column header="Actions"></Column>
        </DataTable>
      </CardContent>
    </Card>
  );
}

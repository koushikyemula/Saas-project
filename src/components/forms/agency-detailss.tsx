"use client";

import { Agency } from "@prisma/client";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertDialog } from "../ui/alert-dialog";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type AgencyDetailsProps = {
  data: Partial<Agency>;
};

const FormSchema = z.object({
  name: z.string().min(2, { message: "Agency name must be atleast 2 characters." }),
  companyEmail: z.string().min(1),
  companyPhone: z.string().min(1),
  whiteLabel: z.boolean(),
  address: z.string().min(1),
  city: z.string().min(1),
  zipCode: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  agencyLogo: z.string().min(1),
});

export const AgencyDetails = ({ data }: AgencyDetailsProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const [deleteAgency, setDeleteAgency] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: data.name,
      companyEmail: data.companyEmail,
      companyPhone: data.companyPhone,
      whiteLabel: data.whiteLabel || false,
      address: data.address,
      city: data.city,
      zipCode: data.zipCode,
      state: data.state,
      country: data.country,
      agencyLogo: data.agencyLogo,
    },
  });

  const handleSubmit = async () => {};

  return (
    <AlertDialog>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Agenncy Information</CardTitle>
          <CardDescription>
            Lets create an agency for your business. You can edit agency settings later from the agency
            settings tab.
          </CardDescription>
        </CardHeader>
      </Card>
    </AlertDialog>
  );
};

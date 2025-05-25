import { notFound } from "next/navigation";
import { getMachineById } from "@/app/api/machine/machine";
import MachineManualPage from "@/app/machine-manual/page";

interface MachinePageProps {
  params: { id: string };
}

export default async function Page({ params }: MachinePageProps) {
  const machine = await getMachineById(params.id);

  if (!machine) {
    return notFound();
  }

  return <MachineManualPage machine={machine} />;
}
import { machines } from "./machineMaualData";


export async function getMachineById(id: string) {
  const machine = machines.find((m) => m.id === id);
  return machine ?? null;
}
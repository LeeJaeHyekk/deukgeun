
interface GripTip {
  gripType: string;
  targetMuscles: string[];
  description: string;
}

interface Machine {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  muscleGroup: string[];
  gripTips: GripTip[];
}

interface Props {
  machine: Machine;
}


import { getMachineById } from "../api/machine/machine";
import { notFound } from "next/navigation"; // 404 페이지 처리

export default async function MachineManualPage({ machine }: Props) {

  // const machine = await getMachineById(params.id);
  console.log(machine);

  if (!machine) {
    notFound(); // 404 페이지로 리다이렉트
  }

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{machine.name}</h1>
      <img src={machine.imageUrl} alt={machine.name} className="rounded-lg mb-6" />
      <p className="text-gray-700 mb-4">{machine.description}</p>

      <h2 className="text-2xl font-semibold mb-2">자극 부위</h2>
      <ul className="mb-6">
        {machine.muscleGroup.map((muscle) => (
          <li key={muscle}>✅ {muscle}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">그립/세팅에 따른 자극 팁</h2>
      {machine.gripTips.map((tip, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg bg-gray-50">
          <h3 className="text-lg font-bold">{tip.gripType}</h3>
          <p className="text-gray-600 mb-1">🎯 타겟 근육: {tip.targetMuscles.join(", ")}</p>
          <p className="text-gray-700">{tip.description}</p>
        </div>
      ))}

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">나만의 팁 공유하기</h2>
        <p className="text-gray-500 text-sm">* 다양한 그립, 자세 팁을 공유해 주세요!</p>
      </section>
    </main>
  );
}
// src/app/machine-manual/[id]/page.tsx

// import { getMachineById } from "../api/machine/machine"; // 경로 확인 필수
// import { notFound } from "next/navigation";

// export default async function MachineManualPage({ params }: { params: { id: string } }) {
//   const machine = await getMachineById(params.id);

//   if (!machine) {
//     notFound(); // 존재하지 않는 머신 ID면 404 페이지로 이동
//   }

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">{machine.name}</h1>
//       <img src={machine.imageUrl} alt={machine.name} className="rounded-lg mb-6" />
//       <p className="text-gray-700 mb-4">{machine.description}</p>

//       <h2 className="text-2xl font-semibold mb-2">자극 부위</h2>
//       <ul className="mb-6">
//         {machine.muscleGroup.map((muscle) => (
//           <li key={muscle}>✅ {muscle}</li>
//         ))}
//       </ul>

//       <h2 className="text-2xl font-semibold mb-2">그립/세팅에 따른 자극 팁</h2>
//       {machine.gripTips.map((tip, index) => (
//         <div key={index} className="mb-4 p-4 border rounded-lg bg-gray-50">
//           <h3 className="text-lg font-bold">{tip.gripType}</h3>
//           <p className="text-gray-600 mb-1">🎯 타겟 근육: {tip.targetMuscles.join(", ")}</p>
//           <p className="text-gray-700">{tip.description}</p>
//         </div>
//       ))}

//       <section className="mt-8">
//         <h2 className="text-2xl font-semibold mb-2">나만의 팁 공유하기</h2>
//         <p className="text-gray-500 text-sm">* 다양한 그립, 자세 팁을 공유해 주세요!</p>
//       </section>
//     </main>
//   );
// }


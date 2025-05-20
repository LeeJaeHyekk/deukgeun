import { FC } from 'react';

const PhilosophySection: FC = () => {
  return (
    <section className="bg-white py-20 text-center px-6 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
        득근득근은 단순한 운동 앱이 아닙니다.
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
        우리는 함께 운동하고, 함께 성장하는 <strong className="text-purple-600">커뮤니티 중심 피트니스 플랫폼</strong>입니다.
        득근득근은 기록과 경쟁을 넘어, 서로 격려하고 꾸준히 운동을 이어갈 수 있도록 돕습니다.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">운동은 습관입니다</h3>
          <p className="text-gray-600">챌린지, 인증, 미션을 통해 일상의 루틴으로 운동을 녹여냅니다.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">함께하면 계속할 수 있어요</h3>
          <p className="text-gray-600">커뮤니티와 함께하는 미션은 지속 가능성을 높입니다.</p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
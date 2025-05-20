import { FC } from 'react';
import { Header } from '@/widgets/Header/Header';
import { MissionList } from '@/features/missions/MissionList/MissionList';
import { Mission } from '@/entities/mission/types';

const MissionsAndChallengePage: FC = () => {
  // 임시 데이터
  const missions: Mission[] = [
    {
      id: '1',
      title: 'First Workout',
      description: 'Complete your first workout session',
      points: 100,
      status: 'active',
      requirements: ['Basic equipment']
    },
    {
      id: '2',
      title: 'Weekly Streak',
      description: 'Work out 3 times this week',
      points: 300,
      status: 'locked',
      requirements: ['Consistency']
    }
  ];

  const handleMissionSelect = (mission: Mission) => {
    console.log('Selected mission:', mission);
  };

  return (
    <div>
      <Header />
      <main>
        <MissionList missions={missions} onMissionSelect={handleMissionSelect} />
      </main>
    </div>
  );
};

export default MissionsAndChallengePage; 
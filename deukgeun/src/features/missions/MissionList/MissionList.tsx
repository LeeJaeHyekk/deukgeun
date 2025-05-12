import { FC } from 'react';
import { Mission } from '@/entities/mission/types';
import { Button } from '@/shared/ui/Button/Button';
import styles from './MissionList.module.css';

interface MissionListProps {
  missions: Mission[];
  onMissionSelect: (mission: Mission) => void;
}

export const MissionList: FC<MissionListProps> = ({ missions, onMissionSelect }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Available Missions</h2>
      <div className={styles.list}>
        {missions.map((mission) => (
          <div key={mission.id} className={styles.missionCard}>
            <h3>{mission.title}</h3>
            <p>{mission.description}</p>
            <div className={styles.missionInfo}>
              <span>Points: {mission.points}</span>
              <span>Status: {mission.status}</span>
            </div>
            <Button
              variant="primary"
              onClick={() => onMissionSelect(mission)}
              disabled={mission.status === 'locked'}
            >
              {mission.status === 'completed' ? 'Completed' : 'Start Mission'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}; 
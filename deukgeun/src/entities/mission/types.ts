export interface Mission {
  id: string;
  title: string;
  description: string;
  points: number;
  status: 'active' | 'completed' | 'locked';
  deadline?: Date;
  requirements: string[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  reward: number;
  participants: number;
  status: 'active' | 'completed' | 'locked';
} 
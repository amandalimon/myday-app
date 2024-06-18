export interface Task {
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
}

export type FilterBy = 'all' | 'pending' | 'completed';

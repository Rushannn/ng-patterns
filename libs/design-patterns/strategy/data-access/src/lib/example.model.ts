export type TaskStatus = "backlog" | "in_progress" | "review" | "completed" | "empty";

export interface Task {
  title: string;
  status: TaskStatus;
}

export interface StatusInfo {
  type: TaskStatus
  name: string
  iconPath: string
  color: string
}

export const taskStatusInfoMap: Record<TaskStatus, StatusInfo> = {
  "completed": {
    type: "completed",
    name: 'Завершено',
    iconPath: '/assets/images/icons/ok-icon.svg',
    color: '#4CAF50',
  },
  "backlog": {
    type: "backlog",
    name: 'Бэклог',
    iconPath: '/assets/images/icons/note-icon.svg',
    color: '#FFC107',
  },
  "in_progress": {
    type: "in_progress",
    name: 'В работе',
    iconPath: '/assets/images/icons/gear-icon.svg',
    color: '#2196F3',
  },
  "review": {
    type: "review",
    name: 'На проверке',
    iconPath: '/assets/images/icons/time-icon.svg',
    color: '#FF9800',
  },
  "empty": {
    type: "empty",
    name: '',
    iconPath: '',
    color: '',
  },
}


export interface Task {
  title: string
  status: TaskStatus
}



export enum CardStatus {
  COMPLETE = 1,
  PENDING,
  REJECTED,
  EMPTY,
  NEW_STATUS
}

export interface StatusInfo {
  type: CardStatus
  name: string
  iconPath: string
  color: string
}

export const cardStatusInfoMap: Record<CardStatus, StatusInfo> = {
  [CardStatus.COMPLETE]: {
    type: CardStatus.COMPLETE,
    name: 'Подтверждено',
    iconPath: '/assets/images/icons/ok-icon.svg',
    color:'green',
  },
  [CardStatus.REJECTED]: {
    type: CardStatus.REJECTED,
    name: 'Отказано',
    iconPath: '/assets/images/icons/close-icon.svg',
    color:'red',
  },
  [CardStatus.PENDING]: {
    type: CardStatus.PENDING,
    name: 'Ожидание',
    iconPath: '/assets/images/icons/time-icon.svg',
    color:'blue',
  },
  [CardStatus.EMPTY]: {
    type: CardStatus.EMPTY,
    name: '',
    iconPath: '',
    color:'',
  },
  [CardStatus.NEW_STATUS]: {
    type: CardStatus.NEW_STATUS,
    name: 'Новая',
    iconPath: '/assets/images/icons/time-icon.svg',
    color:'yellow',
  },

}

export interface Card {
  title: string
  status: CardStatus
}

export const cards = [
  {
    title: 'Первый',
    status: CardStatus.COMPLETE
  },
  {
    title: 'Второй',
    status: CardStatus.REJECTED
  },
  {
    title: 'Третий',
    status: CardStatus.PENDING
  },
  {
    title: 'Четвертый',
    status: CardStatus.EMPTY
  },
  {
    title: 'Пятая',
    status: CardStatus.PENDING
  },
  {
    title: 'Шестая',
    status: CardStatus.EMPTY
  },
  {
    title: 'Ctlmvfz',
    status: CardStatus.NEW_STATUS
  }
];

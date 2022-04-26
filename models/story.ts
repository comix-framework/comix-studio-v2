import { IUser } from '~/models/user'

export enum StoryStatus {
  ON_GOING = 'OnGoing',
  END = 'End',
  DROP = 'Drop'
}

export enum StoriesSortEnum {
  CREATED_AT = 'CREATED_AT'
}

export interface IStory {
  id: number
  name: string
  slug: string
  avatar: string
  content: string
  user: IUser
  authors: string
  teams: string
  status: StoryStatus
  countViews: number
  countComments: number
  countRating: number
  totalRating: number
  countBookmark: number

  // todo: CategoryDocument[]
  categories: string[]
  createdAt: number
  updatedAt: number

  // virtual
  rating: number
}

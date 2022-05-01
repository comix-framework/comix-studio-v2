import { IStory } from '~/models/story'

export interface Chapter {
    id: string
    name: string
    slug: string
    story: IStory
    avatar?: string
    content: string[]
    countViews: number
    countComments: number
    order: number
    createdAt: number
}

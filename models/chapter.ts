import { IStory } from '~/models/story'

export interface ChapterContent {
    id: string
    src: string
    storage: string
}

export interface Chapter {
    id: string
    name: string
    slug: string
    story: IStory
    avatar?: string
    content: ChapterContent[]
    countViews: number
    countComments: number
    order: number
    createdAt: number
}

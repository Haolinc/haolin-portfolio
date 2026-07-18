export type ProjectBrief = {
    title: string,
    description: string,
    imageLink: string,
    jsonName: string,
    lastUpdate: string,
    inDevelopment?: boolean,
    order: number
}

export type ProjectContentJson = {
    order?: number,
    heroSection: HeroSectionJson,
    mainContent: MainContentJson,
    techStack: string [],
    images: ImagePathContainer,
    lastUpdate?: string,
    lastEdited?: string,
    lastCommit?: string,
    inDevelopment?: boolean
}

export type HeroSectionJson = {
    title: string,
    subTitle: string,
    description: string,
    liveWebsite?: string,
    githubWebsite?: string
}

export type MainContentJson = {
    overview: string,
    keyFeature: Section[],
    walkthrough: WalkthroughSection[]
}

type WalkthroughSection = {
    header: string,
    subheader: string,
    description: string,
    body: string,
    imagePath: string,
    keyTerms: string[]
}

type Section = {
    header: string,
    body: string
}

export type ImagePathContainer = {
    cover: string
}
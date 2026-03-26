export type ProjectContentJson = {
    heroSection: HeroSectionJson,
    mainContent: MainContentJson,
    techStack: string []
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
}

type Section = {
    header: string,
    body: string
}
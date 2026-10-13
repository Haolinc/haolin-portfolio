// GitHub commit-date lookups, used at build time and again in the browser.

export const PORTFOLIO_REPO = "Haolinc/haolin-portfolio";

export function projectJsonPath(slug: string): string {
    return `public/projects/${slug}.json`;
}

// "https://github.com/Haolinc/job-tracker" -> "Haolinc/job-tracker"
export function parseGithubRepo(githubUrl?: string): string | undefined {
    const match = githubUrl?.match(/github\.com\/([^/]+)\/([^/#?]+)/);
    if (!match)
        return undefined;
    return `${match[1]}/${match[2].replace(/\.git$/, "")}`;
}

// Date of the latest commit on the repo's default branch, optionally narrowed to one file.
export async function fetchLatestCommitDate(repo?: string, filePath?: string): Promise<string | undefined> {
    if (!repo)
        return undefined;
    const pathQuery = filePath ? `&path=${encodeURIComponent(filePath)}` : "";
    try {
        const response = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1${pathQuery}`);
        if (!response.ok)
            return undefined;
        const commits = await response.json();
        const date: string | undefined = commits?.[0]?.commit?.committer?.date;
        return date?.slice(0, 10);
    } catch {
        return undefined;
    }
}

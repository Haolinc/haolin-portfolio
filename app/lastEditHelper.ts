import fs from 'fs/promises';

// Filesystem modification time of the file, as yyyy-mm-dd.
export async function getLastEditedDate(filePath: string): Promise<string | undefined> {
    try {
        const stats = await fs.stat(filePath);
        return stats.mtime.toISOString().slice(0, 10);
    } catch {
        return undefined;
    }
}

// Latest commit date on the default branch of the project's GitHub repo, as yyyy-mm-dd.
export async function getLatestCommitDate(githubUrl?: string): Promise<string | undefined> {
    if (!githubUrl)
        return undefined;
    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/);
    if (!match)
        return undefined;
    const [, owner, repo] = match;
    try {
        const response = await fetch(
            `https://api.github.com/repos/${owner}/${repo.replace(/\.git$/, '')}/commits?per_page=1`,
            { next: { revalidate: 3600 } }
        );
        if (!response.ok)
            return undefined;
        const commits = await response.json();
        const date: string | undefined = commits?.[0]?.commit?.committer?.date;
        return date?.slice(0, 10);
    } catch {
        return undefined;
    }
}

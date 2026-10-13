'use client'
import { useEffect, useState } from 'react';
import { PORTFOLIO_REPO, fetchLatestCommitDate, parseGithubRepo, projectJsonPath } from '@/app/lastEditHelper';

function formatDate(isoDate: string): string {
    const [year, month, day] = isoDate.split('-').map(Number);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (!year || !month || !day || month < 1 || month > 12)
        return isoDate;
    return `${monthNames[month - 1]} ${day}, ${year}`;
}

export default function ProjectDates({slug, githubWebsite, lastEdited, lastCommit}: {slug: string, githubWebsite?: string, lastEdited?: string, lastCommit?: string}){
    const [pageEditDate, setPageEditDate] = useState(lastEdited);
    const [codeCommitDate, setCodeCommitDate] = useState(lastCommit);

    // Refresh both dates from GitHub on mount, the build-time values stay as the fallback.
    useEffect(() => {
        let active = true;
        fetchLatestCommitDate(PORTFOLIO_REPO, projectJsonPath(slug))
            .then(date => { if (active && date) setPageEditDate(date); });
        fetchLatestCommitDate(parseGithubRepo(githubWebsite))
            .then(date => { if (active && date) setCodeCommitDate(date); });
        return () => { active = false; };
    }, [slug, githubWebsite]);

    if (!pageEditDate && !codeCommitDate)
        return <></>;

    return (
        <div className="mt-6 font-mono text-xs text-ink-muted space-y-1">
            {pageEditDate && <p>Last page edit: {formatDate(pageEditDate)}</p>}
            {codeCommitDate && <p>Last github commit: {formatDate(codeCommitDate)}</p>}
        </div>
    );
}

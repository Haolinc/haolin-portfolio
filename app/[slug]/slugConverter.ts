import { ProjectContentJson } from './jsonTypes';
import fs from 'fs/promises';
import path from 'path';

export async function getProjectData(slug: string): Promise<ProjectContentJson | null> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'projects', `${slug}.json`);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const content = JSON.parse(fileContents);
        return content;
    } catch (error) {
        return null;
    }
    
}
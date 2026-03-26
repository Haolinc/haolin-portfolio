import { ProjectContentJson } from '@/types/projectJsonTypes';
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

export async function getAllProjectNames(): Promise<string[]> {
    try {
        const projectPath = path.join(process.cwd(), 'public', 'projects');
        const allFilenames = await fs.readdir(projectPath);
        const jsonFileNames = allFilenames.filter(filename => filename.endsWith(".json")).map(filename => filename.replace(".json", ""));
        return jsonFileNames;
    } catch (error) {
        return [];
    }
}
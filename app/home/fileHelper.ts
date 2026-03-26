import { ProjectContentJson, ProjectBrief } from '@/types/projectJsonTypes';
import path from 'path';
import fs from 'fs/promises';

export async function getProjects(): Promise<ProjectBrief[]> {
    try {
        const projectPath = path.join(process.cwd(), 'public', 'projects');
        const filenames = await fs.readdir(projectPath);
        const projectBriefs = Promise.all(
            filenames
                .filter(filename => filename.endsWith(".json"))
                .map( async filename => {
                    const file = await fs.readFile(`${projectPath}/${filename}`, 'utf8');
                    const jsonFile: ProjectContentJson = JSON.parse(file);
                    return {
                        title: jsonFile.heroSection.title,
                        description: jsonFile.heroSection.description,
                        imageLink: "https://picsum.photos/id/201/700/340",
                        jsonName: filename.replace(".json", ""),
                        lastUpdate: jsonFile.lastUpdate
                    }
        }));
        return projectBriefs;
    } catch (error) {
        return [];
    }
}
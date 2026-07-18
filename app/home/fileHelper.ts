import { ProjectContentJson, ProjectBrief } from '@/types/projectJsonTypes';
import { getLastEditedDate } from '@/app/lastEditHelper';
import path from 'path';
import fs from 'fs/promises';

export async function getProjects(): Promise<ProjectBrief[]> {
    try {
        const projectPath = path.join(process.cwd(), 'public', 'projects');
        const filenames = await fs.readdir(projectPath);
        const projectBriefs = await Promise.all(
            filenames
                .filter(filename => filename.endsWith(".json"))
                .map( async filename => {
                    const filePath = path.join(projectPath, filename);
                    const file = await fs.readFile(filePath, 'utf8');
                    const jsonFile: ProjectContentJson = JSON.parse(file);
                    return {
                        title: jsonFile.heroSection.title,
                        description: jsonFile.heroSection.description,
                        imageLink: jsonFile.images.cover,
                        jsonName: filename.replace(".json", ""),
                        lastUpdate: await getLastEditedDate(filePath) || jsonFile.lastUpdate || "",
                        inDevelopment: jsonFile.inDevelopment,
                        order: jsonFile.order || 0
                    }
        }));
        return projectBriefs.sort((a, b) => b.order - a.order);
    } catch (error) {
        return [];
    }
}
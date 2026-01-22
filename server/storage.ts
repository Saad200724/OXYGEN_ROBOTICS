import { 
  messages, type Message, type InsertMessage,
  chapters, type Chapter, type InsertChapter,
  projects, type Project, type InsertProject
} from "../shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getChapters(): Promise<Chapter[]>;
  getProjects(): Promise<Project[]>;
  getLiveProjects(): Promise<Project[]>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, Message>;
  private chapters: Map<number, Chapter>;
  private projects: Map<number, Project>;
  private currentId: number;

  constructor() {
    this.messages = new Map();
    this.chapters = new Map();
    this.projects = new Map();
    this.currentId = 1;

    // Seed data
    this.seed();
  }

  private seed() {
    const initialChapters: InsertChapter[] = [
      { name: "Bangladesh HQ", location: "Dhaka", lat: 23.8103, lng: 90.4125, executiveLead: "Lead A", memberCount: 150 },
      { name: "Pakistan Chapter", location: "Islamabad", lat: 33.6844, lng: 73.0479, executiveLead: "Lead B", memberCount: 85 },
      { name: "Kazakhstan Chapter", location: "Almaty", lat: 43.2220, lng: 76.8512, executiveLead: "Lead C", memberCount: 45 },
    ];

    initialChapters.forEach((c, i) => {
      this.chapters.set(i + 1, { ...c, id: i + 1, memberCount: c.memberCount ?? 0 });
    });

    const initialProjects: InsertProject[] = [
      { title: "Oxygen Drone v2", description: "Autonomous delivery drone", status: "R&D", teamMembers: "Team Alpha", isLive: true },
      { title: "Bio-Link Pro", description: "Prosthetic arm interface", status: "Completed", teamMembers: "Team Beta", isLive: true },
    ];

    initialProjects.forEach((p, i) => {
      this.projects.set(i + 1, { ...p, id: i + 1, isLive: p.isLive ?? false });
    });
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.currentId++;
    const message: Message = { ...insertMessage, id };
    this.messages.set(id, message);
    return message;
  }

  async getChapters(): Promise<Chapter[]> {
    return Array.from(this.chapters.values());
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getLiveProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(p => p.isLive);
  }
}

export const storage = new MemStorage();

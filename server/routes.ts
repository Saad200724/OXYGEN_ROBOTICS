import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "../shared/schema";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);
      res.json(message);
    } catch (e) {
      res.status(400).json({ error: "Invalid data" });
    }
  });

  app.get("/api/chapters", async (_req, res) => {
    const chapters = await storage.getChapters();
    res.json(chapters);
  });

  app.get("/api/projects", async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get("/api/projects/live", async (_req, res) => {
    const projects = await storage.getLiveProjects();
    res.json(projects);
  });

  const httpServer = createServer(app);
  return httpServer;
}

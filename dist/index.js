// server/index.ts
import express from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  messages;
  currentId;
  constructor() {
    this.messages = /* @__PURE__ */ new Map();
    this.currentId = 1;
  }
  async createMessage(insertMessage) {
    const id = this.currentId++;
    const message = { ...insertMessage, id };
    this.messages.set(id, message);
    return message;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull()
});
var insertMessageSchema = createInsertSchema(messages);

// server/routes.ts
function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const data = insertMessageSchema.parse(req.body);
      const message = await storage.createMessage(data);
      res.json(message);
    } catch (e) {
      res.status(400).json({ error: "Invalid data" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/index.ts
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
(async () => {
  const server = registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });
  const publicPath = path.resolve(__dirname, "../dist");
  app.use(express.static(publicPath));
  app.get("/*splat", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      return next();
    }
    res.sendFile(path.resolve(publicPath, "index.html"), (err) => {
      if (err) {
        res.status(404).send("Frontend build not found. Please run 'npm run build' first.");
      }
    });
  });
  const PORT = Number(process.env.PORT) || 5e3;
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`serving on port ${PORT}`);
  });
})();

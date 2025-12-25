import express from "express";
import { registerRoutes } from "./routes";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  const server = registerRoutes(app);

  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  // For Replit/Vercel deployment: Always serve static files from dist
  const publicPath = path.resolve(__dirname, "../dist");
  app.use(express.static(publicPath));
  
  // Handle SPA routing - serve index.html for all non-API routes
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      return next();
    }
    // Only try to send index.html if it exists, otherwise fall through or error
    res.sendFile(path.resolve(publicPath, "index.html"), (err) => {
      if (err) {
        res.status(404).send("Frontend build not found. Please run 'npm run build' first.");
      }
    });
  });

  const PORT = Number(process.env.PORT) || 5000;
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`serving on port ${PORT}`);
  });
})();

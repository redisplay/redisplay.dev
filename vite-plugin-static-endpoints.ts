import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

export function staticEndpoints(): Plugin {
  return {
    name: "static-endpoints",
    configureServer(server) {
      // Serve /latest-version as JSON during dev
      server.middlewares.use("/latest-version", (req, res, next) => {
        if (req.method === "GET") {
          const jsonPath = path.resolve(process.cwd(), "public/latest-version.json");
          if (fs.existsSync(jsonPath)) {
            const json = fs.readFileSync(jsonPath, "utf-8");
            res.setHeader("Content-Type", "application/json");
            res.end(json);
          } else {
            next();
          }
        } else {
          next();
        }
      });
    },
    writeBundle() {
      // Copy latest-version.json to latest-version in dist during build (without extension)
      const jsonPath = path.resolve(process.cwd(), "public/latest-version.json");
      const distJsonPath = path.resolve(process.cwd(), "dist/latest-version");
      if (fs.existsSync(jsonPath)) {
        fs.copyFileSync(jsonPath, distJsonPath);
      }
      
      // Copy download.html to download in dist (without extension) for GitHub Pages
      const downloadHtmlPath = path.resolve(process.cwd(), "public/download.html");
      const distDownloadPath = path.resolve(process.cwd(), "dist/download");
      if (fs.existsSync(downloadHtmlPath)) {
        fs.copyFileSync(downloadHtmlPath, distDownloadPath);
      }
    },
  };
}


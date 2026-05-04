import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export interface Chapter {
  title: string;
  slug: string;
}

export interface Module {
  module: string;
  chapters: Chapter[];
}

export interface AppConfig {
  title: string;
  subtitle: string;
  author: string;
  version: string;
  theme: {
    primary: string;
    background: string;
    accent: string;
  };
  navigation: Module[];
}

export function getAppConfig(): AppConfig {
  const configPath = path.join(process.cwd(), "config.yaml");
  const fileContents = fs.readFileSync(configPath, "utf8");
  return yaml.load(fileContents) as AppConfig;
}

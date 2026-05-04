import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const contentDir = path.join(process.cwd(), "src/content");

export async function getChapterContent(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");

  const { content, frontmatter } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
    components: {
      // Define custom components here (e.g. SimulationCard, TerminalView)
    },
  });

  return { content, frontmatter };
}

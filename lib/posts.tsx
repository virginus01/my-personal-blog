import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { metadata } from "../app/layout";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    //Remove the ".md" from file name to get the id
    const id = fileName.replace(/\.md$/, "");

    //Read the markdiwn file as String
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //Use the gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      title: matterResult.data.title,
      date: matterResult.data.date,
      id,
    };
    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

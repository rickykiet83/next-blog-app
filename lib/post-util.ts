import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName: string) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ''); // removes the file extension

  const postData = {
    slug: postSlug,
    ...data,
    content: content
  };

  return postData;
}

function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA: any, postB: any) => postA.date > postB.date ? - 1 : 1);

  return sortedPosts;

}

function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((p: any) => p.isFeatured);
  return featuredPosts;
}
import PostHeader from './post-header';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';

const DUMMY_POSTS = {
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  excerpt:
    'Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building React applications',
  date: '2021-9-17',
  slug: 'getting-started-with-nextjs',
  content: '# This is a first post',
};
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;

import PostHeader from './post-header';
import { PostModel } from '../../../models/post.model';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';

function PostContent({ post }: { post: PostModel }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post?.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;

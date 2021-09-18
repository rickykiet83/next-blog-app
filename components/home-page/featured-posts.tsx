import { PostModel } from '../../models/post.model';
import PostsGrid from '../posts/posts-grid';
import React from 'react';
import classes from './featured-posts.module.css';

function FeaturedPosts({ posts }: { posts: PostModel[] }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;

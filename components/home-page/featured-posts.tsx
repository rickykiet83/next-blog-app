import PostsGrid from '../posts/posts-grid';
import React from 'react';
import classes from './featured-posts.module.css';

function FeaturedPosts(props: any) {
  const { posts } = props || [];
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;

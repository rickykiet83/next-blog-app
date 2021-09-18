import PostsGrid from '../posts/posts-grid';
import React from 'react';
import classes from './featured-posts.module.css';

function FeaturedPosts({
  posts,
}: {
  posts: [
    {
      title: string;
      image: string;
      excerpt: string;
      date: string;
      slug: string;
      content: string;
    }
  ];
}) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;

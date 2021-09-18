import PostsGrid from './posts-grid';
import React from 'react';
import classes from './all-posts.module.css';

function AllPosts(props: any) {
  const { posts } = props;
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;

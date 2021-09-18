import { PostModel } from '../../models/post.model';
import PostsGrid from './posts-grid';
import React from 'react';
import classes from './all-posts.module.css';

function AllPosts({ posts }: { posts: PostModel[] }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;

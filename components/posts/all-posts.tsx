import { GetStaticProps } from 'next';
import PostsGrid from './posts-grid';
import React from 'react';
import classes from './all-posts.module.css';
import { getAllPosts } from '../../lib/post-util';

function AllPosts(props: any) {
  const { posts } = props;
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPosts;

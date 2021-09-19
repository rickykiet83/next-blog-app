import AllPosts from '../../components/posts/all-posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { PostModel } from '../../models/post.model';
import React from 'react';
import { getAllPosts } from '../../lib/post-util';

function AllPostsPage({ posts }: { posts: PostModel[] }) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming languages'
        ></meta>
      </Head>
      <AllPosts posts={posts} />
    </>
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

export default AllPostsPage;

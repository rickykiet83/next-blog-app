import React, { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Hero from '../components/home-page/hero';
import { PostModel } from '../models/post.model';
import { getFeaturedPosts } from './../lib/post-util';

export default function HomePage({ posts }: { posts: PostModel[] }) {
  return (
    <Fragment>
      <Head>
        <title>Master K Blog</title>
        <meta
          name='I blog about web development - especially frontend frameworks like
        Angular or React'
        ></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 100,
  };
};

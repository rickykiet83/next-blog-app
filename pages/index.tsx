import React, { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-posts';
import { GetStaticProps } from 'next';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from './../lib/post-util';

export default function HomePage(props: any) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
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

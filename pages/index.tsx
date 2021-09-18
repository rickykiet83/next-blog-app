import React, { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building React applications',
    date: '2021-9-17',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building React applications',
    date: '2021-9-17',
    slug: 'getting-started-with-nextjs2',
  },
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building React applications',
    date: '2021-9-17',
    slug: 'getting-started-with-nextjs3',
  },
];

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

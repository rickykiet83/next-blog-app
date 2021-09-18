import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostData, getPostsFiles } from '../../lib/post-util';

import PostContent from '../../components/posts/post-detail/post-content';
import { PostModel } from '../../models/post.model';
import React from 'react';

function PostDetailPage({ post }: { post: PostModel }) {
  return <PostContent post={post} />;
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export default PostDetailPage;

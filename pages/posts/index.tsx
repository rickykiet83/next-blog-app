import AllPosts from '../../components/posts/all-posts';
import { GetStaticProps } from 'next';
import { PostModel } from '../../models/post.model';
import { getAllPosts } from '../../lib/post-util';

function AllPostsPage({ posts }: { posts: PostModel[] }) {
  return <AllPosts posts={posts} />;
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

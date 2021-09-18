import AllPosts from '../../components/posts/all-posts';
import { PostModel } from '../../models/post.model';

const DUMMY_POSTS: PostModel[] = [
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

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;

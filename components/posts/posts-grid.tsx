import PostItem from './post-item';
import classes from './posts-grid.module.css';

function PostsGrid({
  posts,
}: {
  posts: [
    {
      title: string;
      image: string;
      excerpt: string;
      date: string;
      slug: string;
      content: string;
    }
  ];
}) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => {
        return <PostItem key={post.slug} post={post} />;
      })}
    </ul>
  );
}

export default PostsGrid;

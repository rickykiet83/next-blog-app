import PostItem from './post-item';
import { PostModel } from '../../models/post.model';
import classes from './posts-grid.module.css';

function PostsGrid({ posts }: { posts: PostModel[] }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => {
        return <PostItem key={post.slug} post={post} />;
      })}
    </ul>
  );
}

export default PostsGrid;

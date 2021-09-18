import PostItem from './post-item';
import classes from './posts-grid.module.css';

function PostsGrid(props: any) {
  return (
    <ul className={classes.grid}>
      {props.map((p) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostsGrid;

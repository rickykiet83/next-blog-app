import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';

import Image from 'next/image';
import classes from './post-content.module.css';

function PostHeader(props: any) {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;

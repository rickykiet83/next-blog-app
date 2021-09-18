import Image from 'next/image';
import classes from './../../styles/hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/ricky.jpeg'
          alt='Kiet Pham'
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi, I'm Kiet Pham</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
}

export default Hero;

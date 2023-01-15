import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';

const About = () => {
  return(
    <div>
      <PageTitle>about</PageTitle>
      <p className={styles.subtitle}>Lorem ipsum</p>
    </div>
  );
};

  export default About;

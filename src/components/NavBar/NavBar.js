import styles from './NavBar.module.scss';

const NavBar = () => {
  return(
    <nav className={styles.nav}>
      <div className={styles.box}>
        <div className={styles.icon}>
          <a href="/"><i className='fa fa-tasks' /></a>
        </div>
        <ul className={styles.links}>
          <li><a href="/">Home</a></li>
          <li><a href="/favorite">Favorite</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

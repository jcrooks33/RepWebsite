import { Link } from 'react-router-dom'; // If you’re using react-router for internal links
import styles from '../css/Nav.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img
          className={styles.img}
          src="https://mcusercontent.com/4c0f3950dc0f76487d3277a17/images/29a6dce6-8349-3205-7721-84703e973c06.png"
          alt="Description"
        />
        <h1>RepReport</h1>
      </div>

      <div className={styles.links}>
        {/* 1) Use Link for internal route to “/” */}
        <Link to="/" className={styles.linkItem}>
          Home
        </Link>

        {/* 2) Use a normal anchor for external site */}
        <a
          href="https://www.house.gov/representatives/find-your-representative"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkItem}
        >
          Find My Rep
        </a>
      </div>
    </nav>
  );
}

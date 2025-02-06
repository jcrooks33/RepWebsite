import { Link } from 'react-router-dom';
import styles from '../css/Newsletters.module.css';

// Just an example array of objects – in reality, you might fetch this from a server
const newsletterData = [
  {
    slug: 'Nutria-and-Alaska',
    title: 'Alaska and Nutria Acts',
    date: '2/5/25'
  },
  {
    slug: 'ohia',
    title: 'Ohia, Forests, and Abortion Acts',
    date: '1/29/25'
  },
  {
    slug: 'laken-riley',
    title: 'Laken Riley, Protection of Women, and Illegitimate Court Counteraction Acts',
    date: '1/22/25'
  },
  {
    slug: 'american-relief-act',
    title: 'The American Relief Act and more',
    date: '1/17/25'
  }
  
  // Add more here as you release more newsletters
];

export default function Newsletters() {
  return (
    <section className={styles.newsletterSection}>
      {/* Left side: Image */}
      <div className={styles.imageContainer}>
        <img
                  src="https://mcusercontent.com/4c0f3950dc0f76487d3277a17/images/289d2b82-75f7-4757-c94f-28664e8b2a69.png"

          alt="American Flag"
        />
      </div>

      {/* Right side: Collection list */}
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>The Collection</h2>
        <hr className={styles.divider} />

        {/* 1) Scrollable list of newsletters */}
        <div className={styles.listScroll}>
          {newsletterData.map((item, idx) => (
            <div key={idx}>
              {/* 2) Link to /newsletter/:slug */}
              <Link to={`/newsletter/${item.slug}`} className={styles.newsletterItem}>
                <h3>{item.title}</h3>
                <p style={{ textAlign: 'left' }}>RepReport: {item.date}</p>
              </Link>
              {/* Light divider between items */}
              {idx < newsletterData.length - 1 && <hr className={styles.divider} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

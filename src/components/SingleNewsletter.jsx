import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { newsletterData } from '../data/newslettersData';
import styles from '../css/Single.module.css';

export default function SingleNewsletter() {
  const { slug } = useParams();
  const [iframeContent, setIframeContent] = useState('');

  useEffect(() => {
    // 1) Get the raw HTML from your newsletterData by slug
    const newsletter = newsletterData[slug];
    if (newsletter) {
      // Set the entire HTML doc into state
      setIframeContent(newsletter.html);
    } else {
      // If no matching newsletter, you can display a "Not found" doc or message
      setIframeContent('<h1>404 - Newsletter Not Found</h1>');
    }
  }, [slug]);

  return (
    <div style={{ padding: '0' }}>
      

      {/* 2) Render the newsletter in an iframe */}
<div className={styles} style={{ padding: '0rem' }}>

  <iframe
    title="RepReport Newsletter"
    className="newsletterFrame" 
    style={{ width: '100%', height: '80vh', border: '1px solid #ccc' }}
    srcDoc={iframeContent}
  />
</div>

    </div>
  );
}

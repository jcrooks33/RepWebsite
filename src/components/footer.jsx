import styles from '../css/Footer.module.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaXing } from 'react-icons/fa'; // Import icons from react-icons

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>©RepReport. All Rights Reserved</p>
                <div className={styles.socialLinks}>
                </div>
            </div>
        </footer>
    );
}

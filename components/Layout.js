import Head from 'next/head';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Sevgilimle Anılarımız</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>{children}</main>
  </div>
);

export default Layout;

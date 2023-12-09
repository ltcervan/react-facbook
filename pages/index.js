import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import styles2 from '../styles/MainNav.module.css';
import MainNavigation from '../components/mainNavigation';
import NewsFeed from '../components/HomePage/NewsFeed';
// import RandomUpdates from './posts/randomUpdates';
import HPleftSide from '../components/HomePage/HPleftSideBar';
import HPrightSide from '../components/HomePage/HPrightSideBar';
// import { GoogleFonts } from 'next-google-fonts';



export default function Home() { // exporting the function Home
  return (
    <div className={styles.container}>

      {/* NAVIGATIONS */}
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap" /> */}
      </Head>
      <MainNavigation />

      <section className={styles.homeMainContainer}>
        <HPleftSide className={styles.leftPanel} />
        <NewsFeed className={styles.midPanel} />
        <HPrightSide className={styles.rightPanel} />
      </section>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
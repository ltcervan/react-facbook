import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Newsfeed from '../components/Newsfeed';
import RandomUpdates from '../components/RandomUpdates';
// import Messages from '../components/Messages';
// import Notifications from '../components/Notifications';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() { // exporting the function Home
  return (
    <div className={styles.container}>
      <div>
        {/* <Messages/> */}
      </div>
      <div>
        {/* <Notification/> */}
      </div>

      <Head>
        <title>React-Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
        React-Facebook
        </h1>
      </main>
      <div>
        <h2 className={styles.description}> Newsfeed </h2> 
        <Newsfeed/>
      </div>
      <div>
      <h2 className={styles.description}> Random Updates </h2> 
        <RandomUpdates/>
      </div>





      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
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

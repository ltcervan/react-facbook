import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Newsfeed from '../components/HomePage/Newsfeed';
import RandomUpdates from '../components/RandomUpdates';
import Messages from '../components/Messages';
import Notifications from '../components/Notifications';

import Link from 'next/link';
import Image from 'next/image';
import NewsFeed from '../components/HomePage/Newsfeed';

export default function Home() { // exporting the function Home
  return (
    //   {/*
    //   container

    //   navigation
    //   Subcontainer 
    //   <section> sidebar  
    //    <section>content  
    //    <section>sidebar


    // */}

    <div className={styles.container}>
      {/* NAVIGATIONS */}
      <section className='navivation'>
        <ul className='logoUL'>
          <li>logo</li>
          <li>Search bar</li>
        </ul>
        <ul className='mainRoutes'>
          <li>home</li>
          <li>games</li>
          <li>groups</li>
          <li>videos</li>
        </ul>
        <ul>
          <li>grid</li>
          <li>messenger</li>
          <li>notifications</li>
          <li>profile</li>
        </ul>
      </section>
      {/* CONTAINER FOR MAIN SECTIONS 

      MAIN
      
      */}
      <section className='mainContainer'>
      {/*  START OF LEFT SIDE BAR/////////////////////// */}
        <div className='leftSidebar'>
          {/* top area with user icon and name */}
          <div className='userHeader'>
            <div className='image'>image</div>
            <div className='LSBProfileName'>name</div>

          </div>
          {/* sidebar links */}
          <ul className='rightSideNavigation'>
            <li>friends</li>
            <li>memories</li>
            <li>saved</li>
            <li>groups</li>
            <li>video</li>
            <li>market</li>
            <li>feeds</li>
            <li>events</li>
            <li>ads manager</li>
            <li>meta</li>
            <li>See more...</li>
          </ul>

        </div>
        {/*  END OF LEFT SIDE BAR /////////////////// */}
        <div className='mainContent'>
          <NewsFeed/>
        </div>

        <div className='rightSidebar'></div>


      </section>




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

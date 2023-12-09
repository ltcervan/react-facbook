import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaYoutube } from "react-icons/fa";
import { FaGripHorizontal } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";

//importing styles
import styles from '../styles/Home.module.css';
import styles2 from '../styles/MainNav.module.css';


//// MAIN PAGE
export default function MainNavigation() {
    return (
        <div className={styles2.navContainer}>

            <nav className={styles2.navWrap}>

                <ul className={styles2.ulWrapLeft}>
                    <li><img src="/Facebook_Logo_Primary.png" width="23" height="23" />  </li>
                    <li><form className="example">
                        <input className={styles2.navSearch} type="text" placeholder="Search.." name="search"></input>
                        <button className={styles2.navSearch__btn}>
                        <IconContext.Provider value={{ color: "white", size: "10px", className: "searchIcon" }}>
                        <FaSearch />
                        </IconContext.Provider>
                        </button>
                    </form></li>

                </ul>

                <ul className={styles2.ulWrapMid}>
                    <li><a href="/"><FaHome /></a></li>
                    <li><a href="/games"><FaGamepad /></a></li>
                    <li><a href="/settings"><FaUsers /></a></li>
                    <li><a href="/videos"><FaYoutube /></a></li>
                </ul>

                <ul className={styles2.ulWrapRight}>
                    <li><FaGripHorizontal /></li>
                    <li><FaFacebookMessenger /></li>
                    <li><FaBell /></li>
                    <li><FaIdCard /></li>
                </ul>
            </nav>



        </div>
    )
}
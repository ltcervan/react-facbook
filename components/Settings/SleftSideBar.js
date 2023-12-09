import leftStyle from "../../styles/SleftSidebar.module.css";
import styles2 from '../../styles/MainNav.module.css';
import { FaFacebookMessenger } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

/// ================= Icon imports ===================
import { FaLock } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";


export default function HPrightSide() {
    return (

        // /////////////  Settings & privacy  ////////////////////////////////////////////////
        <div className={leftStyle.rightSideBar}>
            {/* top area with user icon and name */}
            <div className={leftStyle.sponserWrapper}>
                <h4>Settings & privacy</h4>
                <button className={styles2.navSearch__btn}>
                        <IconContext.Provider value={{ color: "white", size: "10px", className: "searchIcon" }}>
                        <FaSearch />
                        </IconContext.Provider>
                </button>
                <div className={leftStyle.sponser__block}>
                    <img src="https://picsum.photos/125/100" />
                    <div className={leftStyle.sponser__info}>
                        <p className={leftStyle.sponser__title}>Ipsam veritatis porro sunt recusandae culpa </p>
                        <p className={leftStyle.sponser__site}>site.com</p>
                    </div>
                </div>
                <div className={leftStyle.sponser__block}>
                    <img src="https://picsum.photos/125/75" />
                    <div className={leftStyle.sponser__info}>
                        <p className={leftStyle.sponser__title}>Ipsam veritatis porro sunt recusandae culpa </p>
                        <p className={leftStyle.sponser__site}>site.com</p>
                    </div>
                </div>
            </div>

            {/* //////////   TOOLS AND RESOURCES  ////////////////////////////// */}
            <div className={leftStyle.bdayWrapper}>
                <h4 className={leftStyle.bday__title}>Tools and resources</h4>
                <p>Our tools help you control and manage your privacy settings</p>
                <div className={leftStyle.bday__block}>
                    <ul className={leftStyle.bday__ul}>
                        <li> <FaLock/> Privacy Checkup</li>
                        <li> <IoPeopleSharp/> Supervision</li>
                    </ul>
                </div>
            </div>

            {/* ///////////////////////// Preferences ///////////////////// */}
            <div className="contactsWrapper">
                <div className={leftStyle.contacts__header}>
                    <h4 className={leftStyle.contacts__headerLeft}>Preferences</h4>
                    <div className={leftStyle.contacts__headerRight}>
                        <span></span><span>···</span>
                    </div>
                </div>
                {/* //////////   FRIEND SECTION  ////////////////////////////// */}
                <div className={leftStyle.friendsWrapper}>
                    <div className={leftStyle.friends__block}>
                        <p className={leftStyle.friends__icon}> <img src="https://picsum.photos/30/30?random=4" /> </p><p className={leftStyle.friends__words}>Reaction Preferences</p>
                    </div>
                    <div className={leftStyle.friends__block}>
                        <p className={leftStyle.friends__icon}> <img src="https://picsum.photos/30/30?random=3" /> </p><p className={leftStyle.friends__words}>Notifications</p>
                    </div>
                    <div className={leftStyle.friends__block}>
                        <p className={leftStyle.friends__icon}> <img src="https://picsum.photos/30/30?random=2" /> </p><p className={leftStyle.friends__words}>Language and region</p>
                    </div>
                    <div className={leftStyle.friends__block}>
                        <p className={leftStyle.friends__icon}> <img src="https://picsum.photos/30/30?random=1" /> </p><p className={leftStyle.friends__words}>Media</p>
                    </div>
                    <div className={leftStyle.friends__block}>
                        <p className={leftStyle.friends__icon}> <img src="https://picsum.photos/30/30?random=1" /> </p><p className={leftStyle.friends__words}>Dark mode</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
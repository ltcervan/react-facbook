import rightStyle from "../../styles/HPrightSideBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HPrightSide() {
    return (

        // /////////////  SPONSER  ////////////////////////////////////////////////
        <div className={rightStyle.rightSideBar}>
            {/* top area with user icon and name */}
            <div className={rightStyle.sponserWrapper}>
                <h4>Sponsers</h4>
                <div className={rightStyle.sponser__block}>
                    <img src="https://picsum.photos/125/100" />
                    <div className={rightStyle.sponser__info}>
                        <p className={rightStyle.sponser__title}>Ipsam veritatis porro sunt recusandae culpa </p>
                        <p className={rightStyle.sponser__site}>site.com</p>
                    </div>
                </div>
                <div className={rightStyle.sponser__block}>
                    <img src="https://picsum.photos/125/75" />
                    <div className={rightStyle.sponser__info}>
                        <p className={rightStyle.sponser__title}>Ipsam veritatis porro sunt recusandae culpa </p>
                        <p className={rightStyle.sponser__site}>site.com</p>
                    </div>
                </div>
            </div>

            {/* //////////   BIRTHDAY SECTION  ////////////////////////////// */}
            <div className={rightStyle.bdayWrapper}>
                <h4 className={rightStyle.bday__title}>Birthdays</h4>
                <div className={rightStyle.bday__block}>
                    <p className={rightStyle.bday__icon}> 🎁 </p><p className={rightStyle.bday__words}>John Doe and seven others have birthdays today!</p>
                </div>
            </div>

            {/* ///////////////////////// CONTACTS ///////////////////// */}
            <div className="contactsWrapper">
                <div className={rightStyle.contacts__header}>
                    <h4 className={rightStyle.contacts__headerLeft}>Contacts</h4>
                    <div className={rightStyle.contacts__headerRight}>
                        <span>🔎</span><span>···</span>
                    </div>
                </div>
                {/* //////////   FRIEND SECTION  ////////////////////////////// */}
                <div className={rightStyle.friendsWrapper}>
                    <div className={rightStyle.friends__block}>
                        <p className={rightStyle.friends__icon}> <img src="https://picsum.photos/30/30?random=4" /> </p><p className={rightStyle.friends__words}>John Doe</p>
                    </div>
                    <div className={rightStyle.friends__block}>
                        <p className={rightStyle.friends__icon}> <img src="https://picsum.photos/30/30?random=3" /> </p><p className={rightStyle.friends__words}>Jane Doe</p>
                    </div>
                    <div className={rightStyle.friends__block}>
                        <p className={rightStyle.friends__icon}> <img src="https://picsum.photos/30/30?random=2" /> </p><p className={rightStyle.friends__words}>John Doe</p>
                    </div>
                    <div className={rightStyle.friends__block}>
                        <p className={rightStyle.friends__icon}> <img src="https://picsum.photos/30/30?random=1" /> </p><p className={rightStyle.friends__words}>Jane Doe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
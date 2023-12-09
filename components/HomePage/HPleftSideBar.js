import leftStyle from "../../styles/HPleftSideBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HPleftSide() {
    return (
        <div className="leftSidebar">
            {/* top area with user icon and name */}
            {/* //////////   BIRTHDAY SECTION  ////////////////////////////// */}
            <div className={leftStyle.bdayWrapper}>

                {/* //////////   FRIEND SECTION  ////////////////////////////// */}
                <div className={leftStyle.navLeftWrapper}>
                    <div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=4" /> </p><p className={leftStyle.navLeft__words}>John Doe</p>
                    </div>
                    <div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=3" /> </p><p className={leftStyle.navLeft__words}>Friends</p>
                    </div>
                    <div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=2" /> </p><p className={leftStyle.navLeft__words}>Memories</p>
                    </div>
                    <div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=5" /> </p><p className={leftStyle.navLeft__words}>Saved</p>
                    </div>
                    <div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=6" /> </p><p className={leftStyle.navLeft__words}>Groups</p>
                    </div>
                    <div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=7" /> </p><p className={leftStyle.navLeft__words}>Video</p>
                    </div><div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=8" /> </p><p className={leftStyle.navLeft__words}>Marketplace</p>
                    </div><div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=9" /> </p><p className={leftStyle.navLeft__words}>Feeds</p>
                    </div>
                    <div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=10" /> </p><p className={leftStyle.navLeft__words}>Events</p>
                    </div>
                    <div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=11" /> </p><p className={leftStyle.navLeft__words}>Ads Manager</p>
                    </div><div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=12" /> </p><p className={leftStyle.navLeft__words}>Meta Quest</p>
                    </div><div className={leftStyle.navLeft__block}>
                        <p className={leftStyle.navLeft__icon}> <img src="https://picsum.photos/30/30?random=13" /> </p><p className={leftStyle.navLeft__words}>See More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
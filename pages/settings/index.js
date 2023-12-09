import gameStyles from "../../styles/gamesPage.module.css"
// import HPstyle from "../../styles/HPrightSideBar.module.css"
import MainNavigation from "../../components/mainNavigation"
import NewsFeed from "../../components/HomePage/NewsFeed";
import HPLeftSideBar from "../../components/HomePage/HPleftSideBar"
import HPleftSide from "../../components/HomePage/HPleftSideBar";
import SleftSideBar from "../../components/Settings/SleftSideBar";



export default function Settings() {
    return (

        <div className={gameStyles.container}>
            <MainNavigation />
            <div className={gameStyles.gameWrapper}>
                <div className={gameStyles.sideBar}>side bar
                    {/* <HPleftSide />  */}
                    <SleftSideBar/>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className={gameStyles.mainContent}>
                    <NewsFeed />
                </div>

            </div>
        </div>



    )
}
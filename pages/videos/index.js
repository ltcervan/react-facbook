import gameStyles from "../../styles/gamesPage.module.css"
import MainNavigation from "../../components/mainNavigation"
import NewsFeed from "../../components/HomePage/NewsFeed";
import HPLeftSideBar from "../../components/HomePage/HPleftSideBar";
import VideoCard from "../../components/videoCard";
export default function Videos() {
    return (

        <div className={gameStyles.container}>
            <MainNavigation />
            <div className={gameStyles.gameWrapper}>
                <div className={gameStyles.sideBar}>side bar
                <HPLeftSideBar/>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className={gameStyles.mainContent}>
                <VideoCard />
                </div>

            </div>
        </div>
    


    )
}
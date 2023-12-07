import styles from "../../styles/newsfeed.module.css";
import Link from "next/link";

// data
const array = [
    'Layla',
    'Daniel',
    'Darren',
    'Tiffany',
    'Rodrigo',
    'Rome',
    'Avisa'
]

export default function NewsFeed() {
    const userNames = array.map((currentUser, index) => {
        return <div key={index} className={styles.feedContainer}>
            <div className={styles.feedHeader}>
                <div className="userIcon"><img src="https://picsum.photos/50/50" alt="" /></div>
                <div className="userWrap"><div className="userNames">{currentUser}</div>
                    <div className="timeStamp">timestamp</div>
                </div>

            </div>
            <div className="topTextFeed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto pariatur maxime numquam quaerat</div>
            <div className="feedImage"><img src="https://picsum.photos/400/150" alt="" /></div>
            <div className="feedDetails">
                <ul className={styles.ulList}>
                <li className="userSite">mysite.com</li>
                <li className="feedTitle">Some random title</li>
                <li className="feedSummary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque fugiat sed quos quo consectetur, est culpa porro totam voluptate placeat laboriosam possimus, magnam quis facilis commodi corporis, vero laborum?</li>
                </ul>
            </div>
            <div className={styles.feedTotals}>
                <span className="emojiCount">😃😡😨😭 333 </span>
                <span className="feedComments">444 Comments</span>
                <span className="feedShares">12 shares</span>
            </div>
            <div className={styles.feedSocial}>
                <span className="feedLike"> 👍 Like</span>
                <span className="feedCommentHere"> 🗣️ Comment</span>
                <span className="feedShare"> 🫶 Share</span>
            </div>
        </div>
    })
    return (
        <div className="feedWrapper">
            {userNames}
        </div>
    )
}
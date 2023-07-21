import '../../css/Header.css'
import HomeList from './HomeList'
import Header from "../Header";
export default function HomeBox() {
    return (
        <div>
            <div className="header">
                <Header/>
            </div>
            <div className="home_main">
                <HomeList />
            </div>
        </div>
    )
}
import CheckoutList from "./CheckoutList";
import Header from "../Header";

export default function CheckoutBox() {
    return (
        <div>
            <div className="header">
                <Header/>
            </div>
            <div className="main">
                <CheckoutList />
            </div>
        </div>
    )
}
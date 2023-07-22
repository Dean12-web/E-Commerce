import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import '../css/Header.css'
import { useStateValue } from '../StateProvider';
export default function Header() {
    const [{basket}, dispatch] = useStateValue()
    console.log(basket)
    return (
        <div className="home_header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header_logo">
                    <StorefrontIcon fontSize='large' />
                    <h2 className="header_logoTitle">eSHOP</h2>
                </div>
            </Link>Ï
            <div className="header_search">
                <input type="text" className='header_searchInput' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav">
                <div className="nav_item">
                    <span className="nav_itemLineOne">Hello Guest</span>
                    <span className="nav_itemLineTwo">Sign in</span>
                </div>
                <div className="nav_item">
                    <span className="nav_itemLineOne">Your</span>
                    <span className="nav_itemLineTwo">Shop</span>
                </div>
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="nav_items">
                        <ShoppingBasketIcon className='nav_itemBasket' />
                        <span className="nav_itemLineTwo nav_basketCount">
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

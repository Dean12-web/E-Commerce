import '../../css/CheckoutProduct.css'
export default function CheckoutProduct() {
    return (
        <div className="checkoutProduct">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="checkoutProduct_image" className='checkoutProduct_image' />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>100</strong>
                </p>
                <div className="checkoutProduct_rating">
                    ⭐⭐
                </div>
                <button>Remove From Basket</button>
            </div>
        </div>
    )
}
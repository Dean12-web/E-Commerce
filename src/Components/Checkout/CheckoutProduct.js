import '../../css/CheckoutProduct.css'
export default function CheckoutProduct({ id, title, image, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt="checkoutProduct_image" className='checkoutProduct_image' />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
                <button>Remove From Basket</button>
            </div>
        </div>
    )
}
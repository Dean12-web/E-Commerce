import '../../css/Product.css'
export default function HomeItem({ id, title, price, rating, image }) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>Rp</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="img_name" />
            <button>Add To Basket</button>
        </div>
    )
}
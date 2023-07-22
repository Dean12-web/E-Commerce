import '../../css/Product.css'
import { useStateValue } from '../../StateProvider';
export default function HomeItem({ id, title, price, rating, image }) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title:title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

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
            
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}
import '../../css/Product.css'
import { useStateValue } from '../../StateProvider';
import { auth } from '../../Firebase'
export default function HomeItem({ id, title, price, rating, image }) {
    const [state, dispatch] = useStateValue();
    const user = auth.currentUser

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
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

            {user === null ? (
                <button onClick={() => alert('Login First')}>Add To Basket</button>
            ):(
                <button onClick={addToBasket}>Add To Basket</button>

            )}

        </div>
    )
}
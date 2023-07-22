import { useStateValue } from '../../StateProvider'
import '../../css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../reducer/reducer'

export default function Subtotal(){
    const [{basket}, dispatch] =  useStateValue()
    
    return(
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This Order Contains a gift
                        </small>
                    </>
                )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}
import "./cart.css"
import DataContext from "../../context/DataContext"
import { useContext } from "react"
import img from "../../assets/images/image-product-1-thumbnail.jpg"
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {

    const { showCart, cartItems, handleDelete } = useContext(DataContext)

    return (
        <div className={`cart_menu ${showCart ? "show" : ""}`}>
            <h4>Cart</h4>
            <div className="items">
                {cartItems.length ? (
                    <>
                    {cartItems.map((item, index)=> (
                        <div className="item" key={index}>
                        <img src={img} alt="" />
                        <div>
                            <p>{item.title}</p>
                            <div className="cart_prices">
                                <span>{`${item.price} x ${item.amount}`}</span>
                                <span className="total">{`$${item.amount * 125.00}`}</span>
                            </div>
                        </div>
                        <FaTrashCan  className="trashCan" onClick={()=> handleDelete(item.id)}/>
                    </div>
                    ))}
                    <button className="check">
                        Checkout
                    </button>
                    
                    </>

                ) : "Your cart is empty."}
            </div>
        </div>
    )
}

export default Cart
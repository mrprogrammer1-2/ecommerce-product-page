import "./cart.css"
import DataContext from "../../context/DataContext"
import { useContext, useEffect, useRef } from "react"
import img from "../../assets/images/image-product-1-thumbnail.jpg"
import { FaTrashCan } from "react-icons/fa6";

const Cart = () => {

    const { showCart, setShowCart, cartItems, handleDelete } = useContext(DataContext)

    const cartRef = useRef(null)

    useEffect(()=> {
        const handleClickOut = (e)=> {
            if (cartRef.current && !cartRef.current.contains(e.target)) {
                setShowCart(false)
            }
        }

        if (showCart) {
            document.addEventListener("mousedown", handleClickOut)
        }

        return ()=> {
            document.removeEventListener("mousedown", handleClickOut)
        }

    }, [showCart])

    return (
        <div ref={cartRef} className={`cart_menu ${showCart ? "show" : ""}`}>
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

                ) : <p className="empty_txt">Your cart is empty.</p>}
            </div>
        </div>
    )
}

export default Cart
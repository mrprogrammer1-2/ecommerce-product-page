import { FiShoppingCart } from "react-icons/fi";

import "./info.css";
import { DiEnvato } from "react-icons/di";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const Info = () => {

    const { cartCount, setCartCount, handleCartCount, handleAddToCart } = useContext(DataContext)

  return (
    <div className="container info">
        <div className="company">sneaker company</div>
        <h1 className="title">fall limited edition sneakers</h1>
        <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="prices">
            <div className="current-price">$125.00</div>
            <div className="discount">50%</div>
            <div className="old-price">$250.00</div>
        </div>
        <div className="btns">
            <div className="product_num">
                <button className="minus" onClick={()=> handleCartCount(-1)}>-</button>
                <span className="num">{cartCount}</span>
                <button className="plus" onClick={()=> handleCartCount(1)}>+</button>
            </div>
            <button className="addCart" onClick={()=> handleAddToCart(1)}>
                <FiShoppingCart className="cart" aria-label="Shopping Cart" />
                <span className="addCart_text">Add to cart</span>
            </button>
        </div>
    </div>
  )
}

export default Info
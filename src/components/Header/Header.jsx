import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import imgAvatar from "../../assets/images/image-avatar.png";
import { MdClose } from "react-icons/md";
import "./header.css"
import { useContext, useState, useRef, useEffect } from "react";
import DataContext from "../../context/DataContext";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const { handleShowCart, itemsAmount } = useContext(DataContext)
  const menuRef = useRef(null)

  useEffect(()=> {
    const handleClickOut = (e)=> {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOut)
    }

    return ()=> {
      document.removeEventListener("mousedown", handleClickOut)
    }
  }, [menuOpen])

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="header">
      <nav className="container">
        <div>
          <RxHamburgerMenu className="menu_icon" aria-label="Menu" onClick={handleMenuToggle} />
          <h1 className="logo">sneakers</h1>
          <div className="menu_desktop">
            <ul>
            <li className="menu_item">Collections</li>
            <li className="menu_item">Men</li>
            <li className="menu_item">Women</li>
            <li className="menu_item">About</li>
            <li className="menu_item">Contact</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="shopping_cart">
          <FiShoppingCart className="cart" aria-label="Shopping Cart" onClick={handleShowCart} />
          {itemsAmount > 0 && (
            <span className="items_amount">{itemsAmount}</span>
          )}
          </div>
          <div className="profile">
            <img src={imgAvatar} alt="avatar" className="avatar" />
          </div>
        </div>
      </nav>
      <div className={`overlay ${menuOpen ? "open" : ""}`}></div>
      <div ref={menuRef} className={`menu_mobile ${menuOpen ? "open" : ""}`}>
        <MdClose className="close_icon" aria-label="Close" onClick={handleMenuToggle} />
        <ul>
          <li className="menu_item">Collections</li>
          <li className="menu_item">Men</li>
          <li className="menu_item">Women</li>
          <li className="menu_item">About</li>
          <li className="menu_item">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
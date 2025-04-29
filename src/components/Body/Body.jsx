import ProductsSwiper from "../Products/mobileProducts/ProductsSwiper";
import DesktopProducts from "../Products/desktopoProducts/DesktopProducts";
import Info from "../Info/Info";

import "./body.css"

const Body = () => {
  return (
    <div className="Body container">
      <DesktopProducts />
        <ProductsSwiper />
        <Info />
    </div>
  )
}

export default Body
import { useState } from 'react';
import img1 from '../../../assets/images/image-product-1.jpg';
import img2 from '../../../assets/images/image-product-2.jpg';
import img3 from '../../../assets/images/image-product-3.jpg';
import img4 from '../../../assets/images/image-product-4.jpg';
import './desktopProducts.css';
import ImageModal from './ImageModal';

const DesktopProducts = () => {
    const [mainImgIndex, setMainImgIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false)

    const productImgs = [
      img1,
      img2,
      img3,
      img4
    ]

    const handleImgClick = (index) => {
      setMainImgIndex(index);
  }

  return (
    <>
    <div className="desktop_products_container">
      <div className="main_img_container">
        <img src={productImgs[mainImgIndex]} alt="Product view 1" className="main_img" onClick={()=> setOpenModal(!openModal)} />
      </div>
      <div className="sm_imgs">
      { productImgs.map((img, index)=> (
        <img key={index} src={img} alt="" className={`sm_img ${index === mainImgIndex? "active" : ""}`} onClick={()=> handleImgClick(index)} />
       ))}
      </div>
    </div>
    <ImageModal openModal={openModal} onClose={()=> setOpenModal(false)} mainImgIndex={mainImgIndex} productImgs={productImgs} />
    </>
  )
}

export default DesktopProducts
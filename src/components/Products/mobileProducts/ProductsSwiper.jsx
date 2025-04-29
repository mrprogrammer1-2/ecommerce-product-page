import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from '../../../assets/images/image-product-1.jpg';
import img2 from '../../../assets/images/image-product-2.jpg';
import img3 from '../../../assets/images/image-product-3.jpg';
import img4 from "../../../assets/images/image-product-4.jpg";
import './productsSwiper.css'; // Import your custom CSS file

const ProductsSwiper = () => {
  return (
    <div className="product-swiper-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide>
          <img src={img1} alt="Product view 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Product view 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Product view 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Product view 4" />
        </SwiperSlide>
      </Swiper>
      
      {/* Custom navigation buttons */}
      <div className="swiper-button-prev custom-nav-btn"></div>
      <div className="swiper-button-next custom-nav-btn"></div>
    </div>
  );
};

export default ProductsSwiper;
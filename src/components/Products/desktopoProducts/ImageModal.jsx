import { useState } from "react";
import { useEffect } from "react";
import "./imageModal.css"

const ImageModal = ({openModal, mainImgIndex , productImgs, onClose}) => {
    const [currentIndex, setCurrentIndex] = useState(mainImgIndex)

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (!openModal) return;
          
          if (e.key === 'Escape') {
            onClose();
          } else if (e.key === 'ArrowLeft') {
            handlePrev();
          } else if (e.key === 'ArrowRight') {
            handleNext();
          }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [openModal, mainImgIndex, onClose]);

    useEffect(() => {
        if (openModal) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
        
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [openModal]);

      const handleNext = ()=> {
        setCurrentIndex(prev=>
            prev === productImgs.length - 1 ? 0 : prev + 1
        )
      }

      const handlePrev = ()=> {
        setCurrentIndex(prev=> 
            prev === 0 ? productImgs.length - 1 : prev - 1
        )
      }

      if (!openModal) return null;

  return (
    <div className="modal_overlay">
        <button className="close_btn" aria-label="close" onClick={onClose}>X</button>
       <div className="modal_content">
       <div className="modalImg_container">
            <button className="modal_btn prev" onClick={handlePrev} >
                {'<'}
            </button>

            <img src={productImgs[currentIndex]} alt="" className="modal_image" />

            <button className="modal_btn next" onClick={handleNext} >
                {'>'}
            </button>
        </div>

        <div className="thumbnail_container">
            {
                productImgs.map((img, index)=> (
                    <img key={index} src={img} className="thumbnail" alt="" onClick={()=> setCurrentIndex(index)} />
                ))
            }
        </div>
       </div>

    </div>
  )
}

export default ImageModal
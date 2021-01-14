
import './ImageSlider.css';
import { SliderData } from '../../data/SliderData';
import { useState } from 'react';
import { FaArrowAltCircleRight , FaArrowAltCircleLeft } from 'react-icons/fa'
function ImageSlider({slides}) { 

  const [current , setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () =>{
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () =>{
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(slides) || length <= 0){
    return null;
  }

  return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={ nextSlide }></FaArrowAltCircleLeft>
        <FaArrowAltCircleRight className="right-arrow" onClick={ prevSlide }></FaArrowAltCircleRight>
        {
            SliderData.map((slide , index) =>{
                return (
                  <div className={ index === current ? "slide active" : "slide"} key={ index }>
                    { index === current && <img src={ slide.src } className="img" alt=""></img> }
                  </div>
                )
            })
        }
      </section>
  );
}

export default ImageSlider;

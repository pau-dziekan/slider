import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

interface ImageSlider {
    slides:{image:string}[];
}


const ImageSlider = ( props:ImageSlider ) => {
    const [current, setCurrent] = useState(0)
    const length = props.slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current +1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1);
    }

     if (!Array.isArray(props.slides) || props.slides.length <= 0) {
         return null;
     }

    return (
       <section className='slider'>
           <FaArrowAltCircleLeft className='left-arrow'  onClick={prevSlide}/>
           <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
       {SliderData.map((slide, index) => {
           return (
               <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {index === current && (<img src={slide.image} alt="mountains" className='image'/>)}
                   </div>
           )
       })}

       
       </section>
    )
}


export default ImageSlider
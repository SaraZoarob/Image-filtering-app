import './Slider.css'
import { useState,useRef,TouchEvent } from 'react';
const Slider = ({leftImage, rightImage}) => {

  const[imageSlidePercent, setImageSlidePercent] = useState(0.5);
  const ImageContainer = useRef();
  const slide =(xPosition: number) : void =>{
    
    const containerBoundingRect= ImageContainer.current.getBoundingClientRect();
    setImageSlidePercent(()=>{
      if(xPosition < containerBoundingRect.left){
        return 0;
      } else if (xPosition > containerBoundingRect.right){
        return 1;
      } else{
        return(
          (xPosition -containerBoundingRect.left)/containerBoundingRect.width
          );
      }
      
     });
  };
  const handleMouseOver =() :void =>{
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };
  const handleMouseMove =(event: MouseEvent): void =>{
   slide(event.clientX);
  }
  const handleMouseUp =(event: MouseEvent): void =>{
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  }
  const handleTouchMove =(event: TouchEvent): void =>{
    slide(event.touches.item(0).clientX);
  }
  return( 
  <div >
    <div ref={ImageContainer} className="Image-container">
       <img
          style={{
          height: '100%',
          width:'100%',
          pointerEvents: 'none'
         }}
          src={rightImage}
          alt={rightImage}
       />
       <img className="Top-image" 
           style={{
            pointerEvents: 'none',
            clipPath: 'polygon(0 0, '+imageSlidePercent * 100+'% 0,'+imageSlidePercent *100+'% 100%,0 100%)' 
            }}
            src={leftImage}
            alt={leftImage}
          />
          <div style ={{left:''+imageSlidePercent *100+'%'}}
            className="Slider-container" 
           >
            <div className='Slider'>
              <div style={{touchAction:"none"}} onTouchMove={handleTouchMove} onMouseOver={handleMouseOver} className='Slider-line'></div>
              <div style={{touchAction:"none"}} onTouchMove={handleTouchMove} onMouseOver={handleMouseOver} className='Slider-handle'>
              <svg xmlns="http://www.w3.org/2000/svg" className="Handle-arrows" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
          </div>
            </div>
         </div>
    </div>
  </div>
  );
};

export {Slider};

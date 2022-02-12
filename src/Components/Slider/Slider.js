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
          src={leftImage}
          alt={leftImage}
       />
       <img className="Top-image" 
           style={{
            pointerEvents: 'none',
            clipPath: 'polygon(0 0, '+imageSlidePercent * 100+'% 0,'+imageSlidePercent *100+'% 100%,0 100%)' 
            }}
            src={rightImage}
            alt=""
          />
          <div style ={{left:''+imageSlidePercent *100+'%'}}
            className="Slider-container" 
           >
            <div className='Slider'>
              <div style={{touchAction:"none"}} onTouchMove={handleTouchMove} onMouseOver={handleMouseOver} className='Slider-line'></div>
              <div style={{touchAction:"none"}} onTouchMove={handleTouchMove} onMouseOver={handleMouseOver} className='Slider-handle'></div>
            </div>
         </div>
    </div>
  </div>
  );
};

export {Slider};

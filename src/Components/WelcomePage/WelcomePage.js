import './WelcomePage.css';
import { Slider } from "@mui/material";
import { ToggleButton } from '../ToggleButton/ToggleBttnClass';
import logo from '../../Assets/CloudImageLogo.png';
const WelcomePage=({id,leftFormat,leftInfoCheck,onLeftFormatCallBack,onLeftInfoCallBack,OnLeftQualityChange,onApplyRightCallBack, onApplyLeftCallBack, onQualityChange, infoCheck, onInfoCallBack,format, onFormatCallback, formats, Text, ImagesInfo,selectedImage, onSelectCallBack})=> {
if(id===1){
  return(
        <div className='Background-container'>
        <div className='Top-menu'>
          <img className='Icon' src={logo} alt='logo'></img>
        </div>
        <div className='Center-container'>
          <div className='Text'>
            {Text}
          </div>
          <div className='Select-container'>
            <select className='Select-images' onChange={onSelectCallBack}>
              {
              ImagesInfo.map((option) => (
              <option key={option.id} value={option.src}>{option.title}</option>))
              }
            </select>
        </div>
        </div>
        </div>
  )
}
if( id === 2){
return (
  <div>
    <div className='Background-container'>
      <div className='Top-menu'>
      <img className='Icon' src={logo} alt='logo'></img>
      </div>
      <div className='Center-container'>
        <div className='Text'>
          {Text}
        </div>
        <div className='Select-container'>
            <select className='Select-images' onChange={onSelectCallBack}>
              {
              ImagesInfo.map((option) => (
              <option key={option.id} value={option.src}>{option.title}</option>))
              }
           </select>
        </div>
        <div className='Filter-container'>
           <label className='Settings-label'>Right Image Settings</label>
           <label className='Formats-label'>Select Format
            <select className='Select-formats' value={format} onChange={onFormatCallback}>Select Formats
              {
              formats.map((option) => (
              <option id="option" key={option.id} value={option.type}>
              {option.type}</option>))
              }
            </select>
            </label>
            <label className='Formats-label'>Toggle info
            <ToggleButton
            checked={infoCheck}
            onClickCallback={onInfoCallBack}
          />
            </label>
            <label className='Formats-label'>Select Quality
            <Slider
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChange={onQualityChange}
          />
            </label>
            <button onClick={onApplyRightCallBack} className="btn-grad">
            Apply
           </button>
       </div>
       <div className='Filter-container'>
           <label className='Settings-label'>Left Image Settings</label>
           <label className='Formats-label'>Select Format
            <select className='Select-formats' value={leftFormat} onChange={onLeftFormatCallBack}>Select Formats
              {
              formats.map((option) => (
              <option id="option" key={option.id} value={option.type}>
              {option.type}</option>))
              }
            </select>
            </label>
            <label className='Formats-label'>Toggle info
            <ToggleButton
            checked={leftInfoCheck}
            onClickCallback={onLeftInfoCallBack}
          />
            </label>
            <label className='Formats-label'>Select Quality
            <Slider
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChange={OnLeftQualityChange}
          />
            </label>
            <button onClick={onApplyLeftCallBack} className="btn-grad">
            Apply
           </button>
       </div>
   
      </div>
   </div>
  </div>
          
);
}
}




  

export {WelcomePage};

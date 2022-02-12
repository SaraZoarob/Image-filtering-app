import './WelcomePage.css';
import { Slider } from "@mui/material";
import { ToggleButton } from '../ToggleButton/ToggleBttnClass';
const WelcomePage=({onApplyRightCallBack, onApplyLeftCallBack, onSliderChange, infoCheck, onInfoCallBack,format, onFormatCallback, formats, Text, ImagesInfo,selectedImage, onSelectCallBack})=> {
  return (
    <div>
      <div className='Background-container'>
        <div className='Top-menu'></div>
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
              onChange={onSliderChange}
            />
              </label>
              <button onClick={onApplyLeftCallBack} className="btn-grad">
              Apply
             </button>
         </div>
         <div className='Filter-container'>
             <label className='Settings-label'>Left Image Settings</label>
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
              onChange={onSliderChange}
            />
              </label>
              <button onClick={onApplyRightCallBack} className="btn-grad">
              Apply
             </button>
         </div>
     
        </div>
     </div>
    </div>
            
  );
}

export {WelcomePage};

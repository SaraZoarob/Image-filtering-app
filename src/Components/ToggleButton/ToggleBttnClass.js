import React from "react";
import Switch from "react-switch";
  const ToggleButton = ({ checked, onClickCallback }) => {
    return (
        
        <div >
          <Switch
            checked={checked}
            onChange={onClickCallback}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={15}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="material-switch"
          />
      </div>
    );
   };
   export {ToggleButton};
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToggleButton } from "../Toggle Button/ToggleBttnClass.js";
import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { Slider } from "@mui/material";

const NavBar = ({
  id,
  formats,
  format,
  onSliderChange,
  OnSelectCallBack,
  infoCheck,
  onFormatCallback,
  onInfoCallBack,
  onApplyCallBack,
  onCancelCallBack,
}) => {
  if (id === 1) {
    //Return Main Menu
    return (
      <Navbar id="Menu">
        <Nav.Item id="logo2">
          <img
            id="logo"
            alt=""
            src="https://assets.jolipage.co/assets/logo-cloudimage-whtie.svg?vh=e5fd46"
          />
        </Nav.Item>
      </Navbar>
    );
  }
  if (id === 2) {
    //return Filter
    return (
      <Nav fixed="top" justify defaultActiveKey="/home">
        {/* Add format drop down */}
        <Nav.Item id="item">
          {" "}
          Select Format
          <Nav.Item>
            <select
              id="selectFormat"
              as={Nav.Item}
              value={format}
              onChange={onFormatCallback}
            >
              {/* loop through formats array and convert them into options */}
              {formats.map((option) => (
                <option id="option" key={option.type} value={option.type}>
                  {option.type}
                </option>
              ))}
            </select>
          </Nav.Item>
        </Nav.Item>

        {/* Add Quality value slider */}
        <Nav.Item>
          <Nav.Item id="item">
            Select Quality
            <Slider
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={100}
              onChange={onSliderChange}
            />
          </Nav.Item>
        </Nav.Item>

        {/* Toggleinfo */}
        <Nav.Item>
          <Nav.Item id="item">
            Toggle Info
            <ToggleButton
              checked={infoCheck}
              onClickCallback={onInfoCallBack}
            />
          </Nav.Item>
        </Nav.Item>

        <Nav.Item>
          <Nav.Item id="ApplyItem">
            <button onClick={onApplyCallBack} className="btn-grad">
              Apply
            </button>
            <button onClick={onCancelCallBack} className="cancel">
              Cancel
            </button>
          </Nav.Item>
        </Nav.Item>
      </Nav>
    );
  }
};
export { NavBar };

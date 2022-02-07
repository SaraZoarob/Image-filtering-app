import React from "react";
import "./App.css";
import { NavBar } from "./NavBar/NavbarClass.js";
import ReactCompareImage from "react-compare-image";
import HelloGif from "./Assets/Hello.gif";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      selectedImage: "SelectedImage",
      editedImage: "editedImage",
      selectedImageUrl: HelloGif,
      Format: "WebP",
      infoChecked: false,
      infoCheckedflag: false,
      Quality: 0,
      flag: false,
      FormatsArr: [
        {
          id: 1,
          type: "WebP",
        },
        {
          id: 2,
          type: "JPEG",
        },
        {
          id: 3,
          type: "PNG",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.setFormat = this.setFormat.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.setQuality = this.setQuality.bind(this);
    this.ApplyFormats = this.ApplyFormats.bind(this);
  }

  componentDidMount() {
    fetch(
      'https://scaleflex.cloudimg.io/v7/01_test/sara_sample.json?vh=631222&func=proxy'
    )
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({
          values: json,
        });
      });
  }
  setQuality(e, data) {
    e.preventDefault()
    this.setState({ Quality: data });
  }
  setFormat(e) {
    this.setState({ Format: e.target.value });
  }
  setInfo(infoChecked) {
    this.setState({ infoChecked });
    this.infoCheckedflag = !this.state.infoChecked;
  }

  ApplyFormats() {
    if (this.infoCheckedflag === undefined) {
      this.infoCheckedflag = 0;
    } else if (this.infoCheckedflag === true) {
      this.infoCheckedflag = 1;
    } else if (this.infoCheckedflag === false) {
      this.infoCheckedflag = 0;
    }
    this.setState({
      editedImage:
        "https://doc.cloudimg.io/" + this.state.selectedImageUrl +
        "?force_format=" +
        this.state.Format +
        "&ci_info=" +
        this.infoCheckedflag +
        "&q=" +
        this.state.Quality +
        " ",
    });
  }


  handleChange(e) {
    this.setState({ selectedImage: e.target.value });
    this.setState({ selectedImageUrl: "https://doc.cloudimg.io/"+e.target.value +"" });
    this.setState({ editedImage: "https://doc.cloudimg.io/" + e.target.value +"" });
  }
  handleSelect(e) {
    this.setState({ Quality: e });
  }

  render() {
    if (this.state.selectedImage === "SelectedImage")  {
      return (
        <div id="mainContainer">
          <NavBar id={1} />
          <div className="background"></div>
          <div className="center">
            <h1>Welcome To Our App!</h1>
            <h1>Please select a photo from below</h1>
            <select
              id="style"
              value={this.state.selectedImage}
              onChange={this.handleChange}
            >
              {this.state.values.map((option) => (
                <option value={option.src}>{option.title}</option>
              ))}
            </select>
            <img
              id="Gifimage"
              src={this.state.selectedImageUrl}
              alt="OriginalPhoto"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div id="mainConatiner">
          <NavBar id={1} />
          <div
            className="background"
            src={this.state.selectedImageUrl}
            alt="OriginalPhoto"
          ></div>
          <div className="center">
            <h1>
              Toggle The Filters, Choose The Quality And View Your Changes!
            </h1>

            <select
              id="style"
              value={this.state.selectedImage}
              onChange={this.handleChange}
            >
              {this.state.values.map((option) => (
                <option value={option.src}>{option.title}</option>
              ))}
            </select>
            {/* Add the values to Navbar */}
            <NavBar
              id={2}
              Quality={this.state.Quality}
              formats={this.state.FormatsArr}
              format={this.state.Format}
              onSliderChange={this.setQuality}
              OnSelectCallBack={this.handleSelect}
              infoCheck={this.state.infoChecked}
              onFormatCallback={this.setFormat}
              onApplyCallBack={this.ApplyFormats}
              onInfoCallBack={this.setInfo}
            />
            <ReactCompareImage
              id="photoCompare"
              sliderLineWidth="2px"
              hover="true"
              leftImage={this.state.editedImage}
              rightImage={this.state.selectedImageUrl}
            />
          </div>
        </div>
      );
    }
  }
}
export default App;

import WelcomeImage from './Assets/HelloWave.gif';
import {WelcomePage} from './Components/WelcomePage/WelcomePage';
import React from "react";
import "./App.css";
import {Slider} from "./Components/Slider/Slider.js";
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      selectedImage: "selectedImage",
      leftImageUrl: "leftImage",
      rightImageUrl: "rightImage",
      Format: "WebP",
      infoChecked: false,
      infoCheckedflag: false,
      Quality: 0,
      flag: false,
      Formats: [
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
    this.handleSelect = this.handleSelect.bind(this);
    this.setFormat = this.setFormat.bind(this);
    this.setInfo = this.setInfo.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.setQuality = this.setQuality.bind(this);
    this.ApplyRightFormats = this.ApplyRightFormats.bind(this);
    this.ApplyLeftFormats = this.ApplyLeftFormats.bind(this);

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
          values: json.map((item, id) => Object.assign(item, {id})),
        });
      }); 
  }

    handleSelect(e) {
    this.setState({ selectedImage:"https://doc.cloudimg.io/"+e.target.value+"",leftImageUrl: "https://doc.cloudimg.io/"+e.target.value+"", rightImageUrl: "https://doc.cloudimg.io/"+e.target.value+"" });
    }
    setQuality(e, data) {
      e.preventDefault()
      this.setState({ Quality: data });
    }
    setFormat(e) {
      this.setState({ Format: e.target.value });
      console.log(this.infoCheckedflag);
    }
    setInfo(infoChecked) {
      this.setState({ infoChecked });
      this.infoCheckedflag = !this.state.infoChecked;
    }
    ApplyRightFormats() {
      if (this.infoCheckedflag === undefined) {
        this.infoCheckedflag = 0;
      } else if (this.infoCheckedflag) {
        this.infoCheckedflag = 1;
      } else{
        this.infoCheckedflag = 0;
      }
      this.setState({
        rightImageUrl:
          "https://doc.cloudimg.io/" + this.state.selectedImage+
          "?force_format=" +
          this.state.Format +
          "&ci_info=" +
          this.infoCheckedflag +
          "&q=" +
          this.state.Quality +
          " ",
      });
      console.log(this.state.leftImageUrl);
    }
    ApplyLeftFormats() {
      console.log("left");
      if (this.infoCheckedflag === undefined) {
        this.infoCheckedflag = 0;
      } else if (this.infoCheckedflag) {
        this.infoCheckedflag = 1;
      } else{
        this.infoCheckedflag = 0;
      }
      this.setState({
        leftImageUrl:
          "https://doc.cloudimg.io/" + this.state.selectedImage+
          "?force_format=" +
          this.state.Format +
          "&ci_info=" +
          this.infoCheckedflag +
          "&q=" +
          this.state.Quality +
          " ",
      });
    }
    

  render() {
    if(this.state.selectedImage === "selectedImage"){
      return(
        <div>     
         <WelcomePage Text="Please select an image to continue" ImagesInfo={this.state.values}
          selectedImage={this.state.leftImageUrl} onSelectCallBack={this.handleSelect}
          Quality={this.state.Quality}
          formats={this.state.Formats}
          format={this.state.Format}
          onQualityChange={this.setQuality}
          infoCheck={this.state.infoChecked}
          onApplyCallBack={this.ApplyRightFormats}
          onFormatCallback={this.setFormat}
          onInfoCallBack={this.setInfo}
          />
         <div className='filter-Cover'></div>
          <img
            className='Image-container'
            src={WelcomeImage}
            alt="OriginalPhoto"
          />
        </div>
      )
    }
    else{
      return(
        <div>     
        <WelcomePage Text="Edit formats and view your changes or Choose another image" ImagesInfo={this.state.values}
          selectedImage={this.state.leftImageUrl} onSelectCallBack={this.handleSelect}
          Quality={this.state.Quality}
          formats={this.state.Formats}
          format={this.state.Format}
          infoCheck={this.state.infoChecked}
          onApplyRightCallBack={this.ApplyRightFormats}
          onApplyLeftCallBack={this.ApplyLeftFormats}
          onFormatCallback={this.setFormat}
          onInfoCallBack={this.setInfo}
          onSliderChange={this.setQuality}
          />
          <Slider leftImage={this.state.leftImageUrl} rightImage={this.state.rightImageUrl}/>
         </div>
       )
    }
    }
}

export default App;

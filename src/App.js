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
      leftFormat: "WebP",
      leftInfoChecked: false,
      leftInfoCheckedflag: false,
      leftQuality: 0,
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
    this.setQuality = this.setQuality.bind(this);
    this.setLeftFormat = this.setLeftFormat.bind(this);
    this.setLeftInfo = this.setLeftInfo.bind(this);
    this.setLeftQuality = this.setLeftQuality.bind(this);
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
    }
    setInfo(infoChecked) {
      this.setState({ infoChecked });
      this.infoCheckedflag = !this.state.infoChecked;
    }
    setLeftQuality(e, data) {
      e.preventDefault()
      this.setState({ leftQuality: data });
      console.log(this.state.leftQuality);
    }
    setLeftFormat(e) {
      console.log(this.state.infoCheckedflag);
      this.setState({ leftFormat: e.target.value });
    }
    setLeftInfo(leftInfoChecked) {
      this.setState({leftInfoChecked});
      this.leftInfoCheckedflag = !this.state.leftInfoChecked;
    }
    ApplyRightFormats() {
      console.log(this.state.infoCheckedflag);
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
      console.log(this.state.rightImageUrl);
    }
    ApplyLeftFormats() {
      if (this.leftInfoCheckedflag === undefined) {
        this.leftInfoCheckedflag = 0;
      } else if (this.leftInfoCheckedflag) {
        this.leftInfoCheckedflag = 1;
      } else{
        this.leftInfoCheckedflag = 0;
      }
      this.setState({
        leftImageUrl:
          "https://doc.cloudimg.io/" + this.state.selectedImage+
          "?force_format=" +
          this.state.leftFormat +
          "&ci_info=" +
          this.leftInfoCheckedflag +
          "&q=" +
          this.state.leftQuality +
          " ",
      });
      console.log('left',this.state.leftImageUrl);
    }
    

  render() {
    if(this.state.selectedImage === "selectedImage"){
      return(
        <div>     
         <WelcomePage id={1} Text="Please select an image to continue" ImagesInfo={this.state.values}
          selectedImage={this.state.leftImageUrl} onSelectCallBack={this.handleSelect}
          />
          <img
            className="WelcomeImage-container"
            src={WelcomeImage}
            alt="OriginalPhoto"
           />
        </div>
      )
    }
    else{
      return(
        <div>     
        <WelcomePage id ={2}Text="Edit formats and view your changes or Choose another image" ImagesInfo={this.state.values}
          selectedImage={this.state.leftImageUrl} onSelectCallBack={this.handleSelect}
          formats={this.state.Formats}
          format={this.state.Format}
          Quality={this.state.Quality}
          infoCheck={this.state.infoChecked}
          leftFormat={this.state.leftFormat}
          leftInfoCheck={this.state.leftInfoChecked}
          onApplyRightCallBack={this.ApplyRightFormats}
          onApplyLeftCallBack={this.ApplyLeftFormats}
          onLeftFormatCallBack={this.setLeftFormat}
          onLeftInfoCallBack={this.setLeftInfo}
          OnLeftQualityChange={this.setLeftQuality}
          onFormatCallback={this.setFormat}
          onInfoCallBack={this.setInfo}
          onQualityChange={this.setQuality}

          />
          <Slider
           leftImage={this.state.leftImageUrl} rightImage={this.state.rightImageUrl}/>
         </div>
       )
    }
    }
}

export default App;

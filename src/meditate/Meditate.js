import React, { Component } from "react";
// import logo from './logo.svg';
// import StyledProgressbar from './StyledProgressbar.js'
import Sound from "react-sound";
import StyledProgressbar from './StyledProgressbar'
import SoundComponent from "./playSound";
import "react-circular-progressbar/dist/styles.css";
import "./Meditate.css";
import "../gifs/meditatevid-unscreen.gif";

const playButton = "svg/play.svg";
const pauseButton = "svg/pause.svg";

const rainAudio = "audio/rain.mp3";

const streamAudio = "audio/stream.mp3";
const wavesAudio = "audio/waves.mp3";

const loudVolumeIcon = "svg/volume-2.svg";
const quietVolumeIcon = "svg/volume-1.svg";
const noVolumeIcon = "svg/volume-x.svg";

class Meditate extends Component {
  state = {
    pbuttonUrl: playButton,
    audioStatus: Sound.status.STOPPED,
    timeValues: [120, 300, 600, 900],
    audioNames: ["Rain", "Stream", "Waves"],
    seekCurrentPosition: 0,
    audioUrl: rainAudio, // Default
    desiredTime: 120, // Default
    timeHovered: false,
    audioHovered: false,
    volume: 100, // Default
    mute: false, // Default
    volumeIcon: loudVolumeIcon,
  };

  timeSelect = (x) => {
    this.setState({
      desiredTime: x.duration,
    });
  }

  playPause = () => {
    // console.log('plaPayse')
    if (this.state.pbuttonUrl === playButton) {
      this.setState({
        pbuttonUrl: pauseButton,
        audioStatus: Sound.status.PLAYING,
      });
    } else if (this.state.pbuttonUrl === pauseButton) {
      this.setState({
        pbuttonUrl: playButton,
        audioStatus: Sound.status.PAUSED,
      });
    }
  }

  audioSelect = (name) => {
    var x = JSON.stringify(name.audioName).replace(/["]+/g, "");

    if (x === this.state.audioNames[1]) {
      this.setState({
        audioUrl: streamAudio,
      });
    } else if (x === this.state.audioNames[2]) {
      this.setState({
        audioUrl: wavesAudio,
      });
    } else {
      this.setState({
        audioUrl: rainAudio,
      });
    }
  }

  moveSeek = (pos) => {
    this.setState({
      seekCurrentPosition: (pos / this.state.desiredTime) * 100,
    });

    if (Math.floor(pos) === this.state.desiredTime) {
      this.setState({
        pbuttonUrl: playButton,
        audioStatus: Sound.status.STOPPED,
      });
    }
  }

  handleTimeHover = () => {
    this.setState((prevState) => ({
      timeHovered: !prevState.timeHovered,
    }));
  };

  handleAudioHover = () => {
    this.setState((prevState) => ({
      audioHovered: !prevState.audioHovered,
    }));
  };

  volumeChange = (event) => {
    let newVolume = event.target.value;
    this.setState({
      volume: this.state.mute ? this.state.volume : newVolume,
      volumeIcon:
        this.state.mute || newVolume === 0
          ? noVolumeIcon
          : newVolume <= 50
          ? quietVolumeIcon
          : loudVolumeIcon,
    });
  };

  toggleMute = () => {
    this.setState({
      volumeIcon: !this.state.mute
        ? noVolumeIcon
        : this.state.volume <= 50
        ? quietVolumeIcon
        : loudVolumeIcon,
      mute: !this.state.mute,
    });
  }

  render() {
    // console.log(this.state.timeBtnClass);
    const timeOptions = this.state.timeValues.map((duration) => (
      <button
        id="btn-med"
        key={duration}
        onMouseEnter={this.handleTimeHover}
        onMouseLeave={this.handleTimeHover}
        className={
          !this.state.timeHovered && duration === this.state.desiredTime
            ? "activemed"
            : ""
        }
        onClick={() => {
          this.timeSelect({ duration });
        }}
      >
        {duration / 60} Minutes
      </button>
    ));

    const audioOptions = this.state.audioNames.map((audioName) => (
      <button
        id="btn-med"
        key={audioName}
        onMouseEnter={this.handleAudioHover}
        onMouseLeave={this.handleAudioHover}
        className={
          !this.state.audioHovered &&
          this.state.audioUrl === "audio/" + audioName.toLowerCase() + ".mp3"
            ? "activemed"
            : ""
        }
        onClick={() => {
          this.audioSelect({ audioName });
        }}
      >
        {audioName}
      </button>
    ));

    return (
      <>
        <div className="Meditate">
          <div className="bg-overlay"></div>

          <div className="time-menu">{timeOptions}</div>
          <div className="player-container">
            <img
              id="background-video-med"
              src={require("../gifs/meditatevid-unscreen.gif")}
              alt="loading..."
            />
            <img
              className="playPause"
              src={this.state.pbuttonUrl}
              alt="Play"
              onClick={(e) => {
                this.playPause();
              }}
            />

            <div className="volume-control">
              <img
                onClick={this.toggleMute}
                className="volume-icon"
                src={this.state.volumeIcon}
                alt=""
              />
              &nbsp;
              <div className="volume-slider">
                <input
                  onChange={this.volumeChange}
                  style={{color: "purple"}}
                  className="volume"
                  type={"range"}
                  step={1}
                  min={0}
                  value={this.state.mute ? 0 : this.state.volume}
                  max={100}
                ></input>
              </div>
            </div>

            <div className="audioSeek">
            <StyledProgressbar id='seek' percentage={this.state.seekCurrentPosition} />
          </div>
          
            <SoundComponent
              playStatus={this.state.audioStatus}
              url={this.state.audioUrl}
              funcPerc={this.moveSeek}
              desiredT={this.state.desiredTime}
              volume={this.state.mute ? 0 : this.state.volume}
            />
            <div className="timer">00 : 00</div>
          </div>

          <div className="audio-menu">{audioOptions}</div>
        </div>
      </>
    );
  }
}

export default Meditate;

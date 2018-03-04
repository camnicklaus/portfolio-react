import React, {Component} from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlay, faStop, faPause, faStepForward, faStepBackward, faBars } from '@fortawesome/fontawesome-free-solid'
// import Draggable from 'react-draggable';

// style contants
import {black, white, transMd, transFast} from 'styleConstants';

const tracksContainerHeight = 85;
const ProgressIndicatorWidth = 100;
// const PIbarWidth = 40;

const Player = styled.div`
    height: 30px;
    display: inline-block;
    padding: 0 10px;
`;

const AudioControls = styled.div`
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

const ProgressIndicator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${ProgressIndicatorWidth}px;
    height: 100%;
    position: relative;
    user-select: none;
    border-left: 1px solid ${white};
    border-right: 1px solid ${white};
    cursor: pointer;
    &:after  {
        opacity: 0;
        content: "track: ${props => props.trackNum}";
        transition: ${transFast}ms linear;
        box-sizing: border-box;
        position: absolute;
        top: -20px;
        left: 0px;
        width: 100%;
        text-align: center;
    }
    ${AudioControls}:hover & {
        &:after {
            opacity: ${props => props.displayTrkNum ? 1 : 0};
        }
    }
`;
const ProgressIndicatorBar = styled.div`
    align-self: flex-start;
    top: 0;
    left: 0;
    height: 100%;
    position: absolute;
    background: red;
    opacity: 0.4;
`;
const AuidoCtrl = styled.div`
    background-color: ${black};
    color: ${white};
    margin: 0 4px;
    width: 16px;
`;

const AudioCtrlVolSlider = styled.input`
    width: 80px;

`;

const HideShowTracksBtn = styled.div`
    /* text-align: center; */
    padding: 0 10px;
    /* font-size: larger; */
    cursor: pointer;
`;

const TracksContainer = styled.div`
    height: ${props => props._display ? tracksContainerHeight : 0}px;
    opacity: ${props => props._display ? 0.8 : 0};
    transition: all ${transMd}ms linear;
    position: absolute;
    bottom: 0px;
    overflow: scroll;
    background: ${props => props._display ? white : black};
    color: ${black};
    border-radius: 5px;
    margin-bottom: 5px;

`;

const Track = styled.div`
    position: relative;
    padding: 5px;
    padding-left: 20px;
    &:before {
        content: "${props => props.pContent}";
        /* content: "\u1368"; */
        font-size: small;
        position: absolute;
        left: 2px;
        top: 4px;
    }
`;

const Tracks = (props) => {

    const list = props.tracksInfo.tracks.map((track, index) => {
        let pContent = "";
        if (track.id === props.currentTrack && props.displayTrackList) {
            pContent = "\u1440";
            // pContent = "\u1445";
        }
        return (
            <Track key={index} onClick={(e) => props.onClick(index, e)} pContent={pContent} >{track.id} - {track.title} {track.length}</Track>
        )
    });
    return (list)
}

class MusicPlayer2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrack: 0,
            displayTrackList: false,
            currentTrackDur: 0,
            trackProgressPercent: 0,
            currentFormattedTime: 0,
            playing: false,
            paused: false,
            volume: 0.7,
            PIHover: false,
            // PILeft: null,
            // PIRight: null,
            target: null,
            throttled: _.throttle(this._onSeek, 100, { 'trailing': false }),
        }
    }

    componentDidMount() {
        this.audioEl.volume = this.state.volume;
    }
    componentWillUpdate(nextProps, nextState) {
    }
    _convertedTime(sec) {
        let time = [];
        let seconds;
        const frac = sec / 60;
        if (/\./.test(frac)) {
            time.push(frac.toString().split(".")[0]);
            seconds = Math.round(`.${frac.toString().split(".")[1]}` * 60, 2);
            if (seconds.toString().length < 2) seconds = `0${seconds}`;
            time.push(seconds);
            return time.join(":");
        } else {
            return frac + ":00";
        }
    }
    _percentToSec = (percent) => {
        return this.audioEl.duration * (percent / 100);
    }
    _onLoadedData = () => {
        this.audioEl.addEventListener('ended', this._onTrackEnd);
        this.setState({currentTrackDur: this._convertedTime(this.audioEl.duration), currentFormattedTime: this._convertedTime(this.audioEl.currentTime)})
    }
    _onTrackEnd = () => {
        !this.state.seeking && this.state.playing && this._nextTrack();
    }
    _playAudio = () => {
        this.audioEl.play();
        this.setState({playing: true, paused: false})

    }
    _pauseAudio = () => {
        this.audioEl.pause();
        this.setState(state => ({
            playing: false,
            paused: !state.paused,
        }));
    }
    _stopAudio = () => {
        this.audioEl.load();
        this.setState({playing: false, paused: false})
    }
    _onTimeUpdate = (e) => {
        let dur = this.audioEl.duration;
        let trackProgressPercent = (this.audioEl.currentTime / dur) * 100 || 0;
        this.setState({currentFormattedTime: this._convertedTime(this.audioEl.currentTime), trackProgressPercent})
    }
    _onVolInputChange = (e) => {
        this.setState({volume: e.target.value / 100})
        this.audioEl.volume = e.target.value / 100;
    }
    _prevTrack = () => {
        if (this.state.currentTrack === 0) return;
        this.setState(state => ({
            currentTrack: state.currentTrack - 1
        }), this.audioEl.load());
        if (this.state.playing) this.audioEl.play();
    }
    _nextTrack = () => {
        if (this.state.currentTrack === this.props.audioTracks.length - 1) {
            this.setState({currentTrack: 0})
            return this._stopAudio();
        }
        this.setState(state => ({
            currentTrack: state.currentTrack + 1
        }), this.audioEl.load());
        if (this.state.playing) this.audioEl.play();

    }
    _onTrackClick = (currentTrack, e) => {
        this.setState(state => ({
            currentTrack
        }), this.audioEl.load());
        if (this.state.playing) this.audioEl.play();
    }
    _onHideShowTracks = (e) => {
        this.setState((state) => ({displayTrackList: !state.displayTrackList}))
    }
    _setPlaybackTime = (trackProgressPercent) => {
        this.audioEl.currentTime = this._percentToSec(trackProgressPercent);
        this.setState( {trackProgressPercent, currentFormattedTime: this._convertedTime(this.audioEl.currentTime) });
    }
    _removeSeekListener = () => {
        this.PIbar.removeEventListener('mousemove', this.state.throttled);
    }
    _onSeek = (e, action) => {

        const PIbarDimensions = this.PIbar.getBoundingClientRect();
        const PILeft = PIbarDimensions.left;
        const PIRight = PIbarDimensions.right;
        const seekRangePx = PIbarDimensions.width;
        let currentSeekLocation = Math.round((e.clientX - PILeft) / seekRangePx * 100);

        if (e.type === 'mousemove') action = e.type;
        if (this.state.seeking && (currentSeekLocation >= 100 || currentSeekLocation <= 0)) {
            action = 'outofbounds';
        }
        switch (action) {
            case 'mousedown':
            this.PIbar.addEventListener('mousemove', this.state.throttled);
            this._setPlaybackTime(currentSeekLocation);
            this.setState({ seeking: true });
            break;
            case 'mouseup':
            this._removeSeekListener();
            this.setState({ seeking: false });
            break;
            case 'mousemove':
            this._setPlaybackTime(currentSeekLocation);
            break;
            case 'mouseleave':
            this._removeSeekListener();
            this.setState({ seeking: false });
            break;
            case 'outofbounds':
            this._removeSeekListener();
            if (currentSeekLocation < 5 && this.state.seeking) this._setPlaybackTime(0);
            if (currentSeekLocation > 95 && this.state.seeking) this._setPlaybackTime(100);
            this.setState({ seeking: false });
            break;
            default:
            return;
        }
    }

    render() {
        const { audioTracks, tracksInfo } = this.props;
        let displayTime = this.state.currentTrackDur;
        if (this.state.playing || this.state.paused || this.state.seeking) displayTime = this.state.currentFormattedTime;
        return (
            <Player>
                <audio
                    ref={(el) => {this.audioEl = el}}
                    onLoadedData={() => this._onLoadedData()}
                    onTimeUpdate={(e) => this._onTimeUpdate(e)}
                >
                    <source ref={el => this.sourceEl = el} src={audioTracks[this.state.currentTrack]} type="audio/mpeg" />
                </audio>
                <div style={{position: "relative"}}>
                <TracksContainer
                    innerRef={(el) => this.tracksContainerEl = el}
                    ref={(el) => this.tracksContainerWrapper = el}
                    _display={this.state.displayTrackList}
                >
                    <Tracks onClick={this._onTrackClick} tracksInfo={tracksInfo} currentTrack={this.state.currentTrack + 1} displayTrackList={this.state.displayTrackList} />
                </TracksContainer>
                </div>
                <AudioControls>
                    {!this.state.playing && <AuidoCtrl onClick={() => this._playAudio()}><FontAwesomeIcon icon={faPlay} /></AuidoCtrl>}
                    {this.state.playing && <AuidoCtrl onClick={() => this._pauseAudio()}><FontAwesomeIcon icon={faPause} /></AuidoCtrl>}
                    <AuidoCtrl onClick={() => this._stopAudio()} ><FontAwesomeIcon icon={faStop} /></AuidoCtrl>
                    <AuidoCtrl onClick={() => this._prevTrack()}><FontAwesomeIcon icon={faStepBackward} /></AuidoCtrl>
                    <AuidoCtrl onClick={() => this._nextTrack()}><FontAwesomeIcon icon={faStepForward} /></AuidoCtrl>
                    <AudioCtrlVolSlider onChange={(e) => this._onVolInputChange(e)} type="range" min="0" max="100" value={this.state.volume * 100} />
                    <HideShowTracksBtn onClick={(e) => this._onHideShowTracks(e)}><FontAwesomeIcon icon={faBars} /></HideShowTracksBtn>
                    <ProgressIndicator
                        innerRef={(el) => this.PIbar = el}
                        onMouseLeave={(e) => this._onSeek(e, 'mouseleave')}
                        onMouseDown={(e) => this._onSeek(e, 'mousedown')}
                        onMouseUp={(e) => this._onSeek(e, 'mouseup')}
                        displayTrkNum={!this.state.displayTrackList}
                        trackNum={this.state.currentTrack + 1}
                    >
                        <ProgressIndicatorBar style={{width: this.state.trackProgressPercent || 0}} />
                        {displayTime}
                    </ProgressIndicator>

                </AudioControls>
            </Player>
        )
    }
}
export default MusicPlayer2;
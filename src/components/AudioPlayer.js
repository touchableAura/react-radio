import { useState, useRef } from "react";
import AudioControls from "./AudioControls";
import AudioAbout from "./AudioAbout";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [currentStreamIndex, setCurrentStreamIndex] = useState(null);
  const [currentStation, setCurrentStation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [areButtonsVisible, setAreButtonsVisible] = useState(false);


  const streams = [
    { id: 1, title: "CKDU", url: "https://archive1.ckdu.ca:9750/ckdu_1_on_air_low.mp3", about: "88.1 FM - CKDU is based at Dalhousie University in Halifax, Nova Scoita"}, // CKDU 88.1 Dalhousie
    { id: 2, title: "CHMA", url: "http://chma-nicecast.mta.ca:8000/listen", about: "106.9 FM - CHMA is based at Mount Allison University in Sackville, New Brunswick"}, // Mount Allision University 
    { id: 3, title: "CJLO", url: "http://rosetta.shoutca.st:8883/stream", about:"1690 AM - CJLO is based at Concordia University in Montreal, Quebec" }, // CJLO 1690 Concordia University, Montreal, QC
    { id: 4, title: "CKUT", url: "https://delray.ckut.ca:8001/ckut-live-128", about:"90.3 FM - CKUT is based at McGill University in Montreal, Quebec"}, //	CKUT-FM 90.3 McGill University - Montreal, QC
    {	id: 5, title: "CILU", url:"http://luradio-server.lakeheadu.ca:8000/stereo128", about:"102.7 FM - CILU is based at Lakehead University in Thunder Bay, Ontario"}, // CILU 102.7 "LU Radio" Lakehead University - Thunder Bay, ON
    { id: 6, title: "CKMS", url:"https://studio.radiowaterloo.ca:8443/radiowaterloo", about:"102.7 FM - CKMS is based at the University of Waterloo in Ontario"}, // 	CKMS-FM Radio Waterloo DI
    { id: 7, title: "CKUW", url: "http://shout.mtl.gameservers.com:9025/;?type=http&nocache=10037", about: "95.9 FM - CKUW is based at the University of Winnipeg in Manitoba"}, // CKUW 95.9 University of Winnipeg, MB
    { id: 8, title: "CJSR", url: "http://cjsr.streamon.fm:8000/CJSR-24k.aac", about: "88.5 FM - CJSR is based at the University of Alberta in Edmonton, Alberta"}, // CJSR 88.5 University of Alberta, Edmonton, AB
    { id: 9, title: "CFUV", url: "http://cfuv.streamon.fm:8000/CFUV-64k.aac",about:"101.9 FM - CFUV is based at the University of Victoria in British Columbia" }, // CFUV 101.9 University of Victoria, BC
    { id: 10, title: "WNYC", url: "http://fm939.wnyc.org/wnycfm.aac", about:"93.9 FM - WNYC is independent radio based in New York City ", }, // NY public radio
    { id: 11, title: "WFMU", url: "http://stream0.wfmu.org/do-or-diy",about:"91.1 FM - WFMU is independent radio based in New Jersey", }, // NJ indie radio
    { id: 12, title: "WZRD", url: "https://wzrd.streamguys1.com/live", about:"89.9 FM - WZRD is freeform radio based out of Chicago"},
    { id: 12, title: "WGHB", url: "https://streams.audio.wgbh.org/wgbh", about:"WGBH is a public radio station located in Boston, Massachusetts"},
    { id: 12, title: "WRTC", url: "http://stream.wrct.org:8000/wrct-hi.mp3", about:"33.3 - WRCT is based at Carnegie Mellon University in Pittsburgh"},
    { id: 12, title: "KALW", url: "http://live.str3am.com:2430/", about:"KALW is an educational FM public radio station, licensed to the San Francisco Unified School District"},
    { id: 12, title: "KEXP", url: "http://live-mp3-128.kexp.org/kexp128.mp3", about:"KEXP is based at the University of Washington" }, // University of Washington
    { id: 13, title: "NTS1", url: "http://stream-relay-geo.ntslive.net/stream", about:"NTS is a global radio platform broadcasting music from over 50 cities" }, // global channel 1
    { id: 14, title: "NTS2", url: "http://stream-relay-geo.ntslive.net/stream2", about:"NTS is a global radio platform broadcasting music from over 50 cities"} // global channel 2
    // Add more streams as needed
  ];

  const handleButtonClick = (stream, index) => {
    if (currentStreamIndex === index && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = stream.url;
      audioRef.current.play();
      setCurrentStation(stream);
      setIsPlaying(true);
      setCurrentStreamIndex(index);
    }
  };

  const handleCollapseToggle = () => {
    setAreButtonsVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
      <button className="collapse-toggle" onClick={handleCollapseToggle}>
        {areButtonsVisible ? "Collapse" : "Expand"}
      </button>
      <div className="btns-container">
        {areButtonsVisible && (
          <>
            {streams.map((stream, index) => (
              <button
                key={stream.id}
                onClick={() => handleButtonClick(stream, index)}
                style={{
                  backgroundColor: "black",
                  color:
                    currentStreamIndex === index && isPlaying
                      ? "rgb(181, 97, 97)"
                      : "white",
                  borderColor:
                    currentStreamIndex === index && isPlaying
                      ? "rgb(181, 97, 97)"
                      : "white",
                  padding: "10px",
                }}
              >
                {stream.title}
              </button>
            ))}
          </>
        )}
        <audio ref={audioRef} />
      </div>
      <AudioControls
        currentStation={currentStation ? currentStation.title : null}
        isPlaying={isPlaying}
      />
      {currentStation && <AudioAbout about={currentStation.about} />}
    </>
  );
};

export default AudioPlayer;
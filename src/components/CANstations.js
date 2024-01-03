import { useState, useRef } from "react";

const CANstations = () => {
  const audioRef = useRef(null);
  const streams = [
    { id: 1, title: "CKDU", url: "https://archive1.ckdu.ca:9750/ckdu_1_on_air_low.mp3"}, // CKDU 88.1 Dalhousie
   
   
    { id: 3, title: "CJLO", url: "http://rosetta.shoutca.st:8883/stream" }, // CJLO 1690 Concordia University, Montreal, QC
    { id: 2, title: "CJSR", url: "http://cjsr.streamon.fm:8000/CJSR-24k.aac" }, // CJSR 88.5 University of Alberta, Edmonton, AB
    { id: 4, title: "CFUV", url: "http://cfuv.streamon.fm:8000/CFUV-64k.aac" }, // CFUV 101.9 University of Victoria, BC
    { id: 5, title: "WNYC", url: "http://fm939.wnyc.org/wnycfm.aac" },
    { id: 6, title: "WFMU", url: "http://stream0.wfmu.org/do-or-diy" },
    { id: 7, title: "KEXP", url: "http://live-mp3-128.kexp.org/kexp128.mp3" },
    { id: 8, title: "NTS", url: "http://stream-relay-geo.ntslive.net/stream" },
    // Add more streams as needed
  ];

  const [currentStream, setCurrentStream] = useState(null);

  const handleButtonClick = (stream) => {
    if (currentStream && currentStream.id === stream.id) {
      audioRef.current.pause();
      setCurrentStream(null);
    } else {
      audioRef.current.src = stream.url;
      audioRef.current.play();
      setCurrentStream(stream);
    }
  };

  return (
    <>
      <div className="btns-container">
        {streams.map((stream) => (
          <button
            key={stream.id}
            onClick={() => handleButtonClick(stream)}
            style={{
              backgroundColor:
                currentStream && currentStream.id === stream.id
                  ? "green"
                  : "grey",
              color: "white",
              padding: "10px",
            }}
          >
            {stream.title}
          </button>
        ))}
        <audio ref={audioRef} />
      </div>
    </>
  );
};

export default CANstations;

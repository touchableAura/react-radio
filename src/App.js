import { useState } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import AudioControls from "./components/AudioControls";
import AudioCovers from "./components/AudioCovers"
import Speaker from "./components/Speaker";
import VideoScreen from "./components/VideoScreen";
import AudioAbout from "./components/AudioAbout";

function App() {
  const [currentStation, setCurrentStation] =useState(null);
  return (
    <div className="container">
      <Speaker />
      <div className="center-console">
        <VideoScreen />
        {/* <AudioControls currentStation={currentStation} /> */}
        <AudioPlayer setCurrentStation={setCurrentStation} />
        <AudioAbout />
      </div>
      <Speaker />
    </div>
  );
}

export default App;

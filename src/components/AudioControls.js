const AudioControls = ({ currentStation }) => {
    return (
      <div className="audio-controls">
        {/* <button>play</button> */}
        {currentStation ? (
          <>
            <p>now playing</p>
            <h2>{currentStation}</h2>
          </>
        ) : (
          <p>select a radio station</p>
        )}
      </div>
    );
  };
  
  export default AudioControls;
  
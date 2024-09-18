// import './App.css';
import React from "react";
import AudioPlayer from "./AudioPlayer";

function App() {
  return (
    <div className="container">
    <AudioPlayer audioSrc={AUDIO_FILE} />
  </div>
  );
}

export default App;

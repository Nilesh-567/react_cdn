import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const startRecognition = () => {
    const recognition = new window.SpeechRecognition() || new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("Voice recognition started. Speak into the microphone.");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Error occurred in recognition:", event.error);
    };

    recognition.start();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Speech-to-Text Converter</h1>
      <textarea
        rows="10"
        cols="50"
        value={text}
        placeholder="Your speech will appear here..."
        readOnly
      />
      <br />
      <button onClick={startRecognition}>Start Recognition</button>
    </div>
  );
};

export default App;

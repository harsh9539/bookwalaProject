import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [fileContent, setFileContent] = useState(" ");
  const [input, setInput] = useState("");
  const [occCount, setOccCount] = useState(0);
  function countOccurence(string, word) {
    const count = string.split(word).length - 1;
    setOccCount(count)
  }

  const submit = (e) => {
    countOccurence(fileContent, input);
    e.preventDefault();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setFileContent(reader.result)
    }
    reader.onerror = () => {
      console.log("file error", reader.error)
    }
  }

  return (
    // Main Div 
    <div style={{ flex: 1, backgroundColor: "#264653" }}>
      <h1 style={{ textAlign: 'center', marginTop: 15, marginBottom: 15, fontSize: 25, fontFamily: 'Lexend Deca', color: "white" }}>BookVala Text Analyzer</h1>
      {/* -------------- Form --------- */}
      <form action="">
        <div className='main' style={{ width: "70%", display: "flex", alignItems: "flex-start", marginTop: 40, justifyContent: "space-between" }}>
          {/* Input File  */}
          <div className="mb-3">
            <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
          </div>
          <div style={{ display: 'flex', alignItems: "flex-start" }}>
            <label style={{ color: 'white' }}>Enter word:  </label>
            <input style={{ color: 'black', backgroundColor: 'white' }} placeholder="Enter Word" value={input} onChange={(txt) => { setInput(txt.target.value) }} type="text" name="" id="" />
          </div>
          <h1 style={{ fontFamily: "Lexend", fontSize: 24, color: "white" }}>{occCount}</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='btn btn-primary' onClick={submit}>Submit</button>
        </div>
      </form>
      {/* Made by Harsh Goyal  */}
    </div >
  );
}

export default App;

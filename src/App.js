import './App.css';
import qr from './images/image-qr-code.png';

function App() {
  return (
    <div id="backdrop">
      <div id="card">
        <div id="qr-holder">
          <img id="qr-image" src={qr} alt="qr-code"></img>
        </div>
        <div id="title-section">
          <h1 id="title">Improve your front-end skills by building projects</h1>
        </div>
        <div id="text-section">
          <p id="small-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [volume, setVolume] = useState(0)

  useEffect(() => {
    console.log("electronAPI disponible:", window.electronAPI);
    if (window.electronAPI?.getVolume) {
      window.electronAPI.getVolume().then(setVolume);
    } else {
      console.error("electronAPI.getVolume no está disponible");
    }
  }, []);
  
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setVolume(value);
    window.electronAPI.setVolume(value);
  };
  

  const getSpeed = () => {
    if (volume === 0) return 'paused';
    if (volume < 30 ) return 'slow';
    if (volume < 70) return 'medium';
    return 'fast';
  };

  return (
    <div className="App">
      <h1> Hámster Volumen App</h1>
        <input type="range" min="0" max="100" value={volume} onChange={handleChange} />
        <p>Volumen: {volume}%</p>

        <div className={`wheel ${volume  >= 95 ? 'spin-hamster' : ''}`}>
          <div className={`wheel-structure ${getSpeed()}`}></div>
          <div className="hamster">
            <div className="body">
              <div className="ear"></div>
              <div className="eye"></div>
              <div className="nose"></div>
            </div>
            <div className="legs">
              <div className="leg front-left"></div>
              <div className="leg front-right"></div>
              <div className="leg back-left"></div>
              <div className="leg back-right"></div>
            </div>
          </div>
        </div>

      </div>
  );
}

export default App

// src/App.js
import { useState } from 'react';
import Confetti from 'react-confetti';
import cake from './assets/cake.png';
import './App.css';

function App() {
  const [showCelebration, setShowCelebration] = useState(false);

  return (
      <div className="app">
        {!showCelebration ? (
            <>
              {/* Header */}
              <div className="hello-message">
                <h1>Сюрприз!🎉</h1>
              </div>

              {/* Button */}
              <button
                  className="celebrate-button"
                  onClick={() => setShowCelebration(true)}
              >
                Нажми на меня
              </button>
            </>
        ) : (
            <>
              <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                  recycle={false}
                  numberOfPieces={1000}
                  gravity={0.2}
              />
              <div className="celebration-wrapper">
                <img src={cake} alt="Cake" className="cake" />
                <div className="card">
                  <h2>С днем Рождения!🎂</h2>
                  <p>Wishing you a fantastic year ahead filled with joy and success!</p>
                </div>
              </div>
            </>
        )}
      </div>
  );
}

export default App;
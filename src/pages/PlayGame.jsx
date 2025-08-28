import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
import ReactModal from "../components/Modal/ReactModal";

function PlayGame({ hint, originalWord, guessedLetters, step, handleLetterClick, onNewSinglePlayerGame }) {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-200 to-gray-400">
      {/* Game Title */}
      <header className="bg-gray-600 text-white py-6 px-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold">Hangman Game</h1>
          <nav>
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
          </nav>
        </div>
      </header>


      {/* Main Game Content */}
      <div className="flex-1 flex flex-col md:flex-row p-6 gap-6">
        {/* Left Side: Game Info and Controls */}
        <div className="w-full md:w-1/2 space-y-6 bg-white rounded-lg shadow-lg p-6">

          {/* Hint */}
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl text-blue-800">
              Hint: <span className="font-semibold">{hint}</span>
            </h2>
          </div>
          
          {/* Masked Text */}
          <div className="text-3xl md:text-4xl font-mono tracking-widest whitespace-nowrap overflow-x-auto pb-2 text-center">
            <MaskedText originalWord={originalWord} guessedLetters={guessedLetters} />
          </div>

          {/* Letter Buttons */}
          <LetterButtons 
            originalWord={originalWord} 
            guessedLetters={guessedLetters} 
            onLetterClick={handleLetterClick} 
            className="grid grid-cols-7 sm:grid-cols-9 gap-2"
          />
        </div>

        {/* Right Side: Hangman Display */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6">
          <HangMan step={step} className="w-full max-w-[400px] h-[400px]" />
        </div>
      </div>

      {/* Footer Links */}
      <footer className="bg-gray-600 text-white py-2 px-4 mt-">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold mb-2">Choose Your Game Mode</h2>
            <p className="text-white">Challenge yourself or play with friends!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onNewSinglePlayerGame} 
              className="bg-white text-blue-600 hover:bg-blue-100 transition-colors py-2 px-6 rounded-full font-semibold"
            >
              Play SinglePlayer Mode
            </button>
            <Link 
              to="/start" 
              className="bg-blue-500 hover:bg-blue-400 transition-colors text-white py-2 px-6 rounded-full font-semibold text-center"
            >
              Play MultiPlayer Mode
            </Link>
          </div>
        </div>
      </footer>

      <ReactModal 
        step={step} 
        originalWord={originalWord} 
        guessedLetters={guessedLetters} 
        onNewSinglePlayerGame={onNewSinglePlayerGame} 
      />
    </div>
  );
}

export default PlayGame;

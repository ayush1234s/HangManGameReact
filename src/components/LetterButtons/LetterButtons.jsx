const KEYBOARD_LAYOUT = [
  "QWERTYUIOP".split(""),
  "ASDFGHJKL".split(""),
  "ZXCVBNM".split("")
];

function LetterButtons({ originalWord, guessedLetters, onLetterClick }) {
  const originalWordSet = new Set(originalWord.toUpperCase().split(''));
  const guessedLettersSet = new Set(guessedLetters.map(letter => letter.toUpperCase()));

  const buttonStyle = (letter) => {
    if (guessedLettersSet.has(letter)) {
      return originalWordSet.has(letter) ? 'bg-green-500 ' : 'bg-red-500 ';
    } else {
      return 'bg-blue-500 ';
    }
  }

  return (
    <div className="flex flex-col items-center space-y-1 sm:space-y-2">
      {KEYBOARD_LAYOUT.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex justify-center w-full">
          {row.map((letter) => (
            <button
              key={`button-${letter}`}
              value={letter}
              onClick={onLetterClick}
              disabled={guessedLettersSet.has(letter)}
              className={`
                h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12
                text-xs sm:text-sm md:text-base
                m-0.5 sm:m-1
                text-white rounded-md
                ${buttonStyle(letter)}
                transition-all duration-200 ease-in-out
                hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
              `}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LetterButtons;
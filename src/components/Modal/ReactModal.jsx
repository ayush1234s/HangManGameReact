import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { Link } from "react-router-dom";

function ReactModal({ step, originalWord, guessedLetters , onNewSinglePlayerGame}) {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState("");

    // Check if the game is over
    useEffect(() => {
        if (step >= 7) {
            setIsOpen(true);
            setStatus("lost");
        } 
        else if (originalWord.split('').every((letter) => guessedLetters.includes(letter))) {
            setIsOpen(true);
            setStatus('win');
        }
    }, [step, originalWord, guessedLetters]);

    function closeModal() {
        setIsOpen(false);
    }

    function handleSinglePlayer() {
        closeModal();
        onNewSinglePlayerGame(); // Generate new word without navigating away
    }

    return (
        <>
            <div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
                    overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
                >
                    <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-lg font-bold">
                        ✖
                    </button>
                    
                    {status === 'win' ? (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-green-500 mb-4">🎉 Congratulations, You Win! 🎉</h2>
                            <p className="text-lg text-gray-700">You guessed the word <strong>{originalWord}</strong> correctly!</p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-red-500 mb-4">😞 You Lost</h2>
                            <p className="text-lg text-gray-700">The word was <strong>{originalWord}</strong></p>
                        </div>
                    )}

                    <div className="mt-6 flex flex-col space-y-4 justify-center items-center">
                    {/* Single Player Option */}
                    <button onClick={handleSinglePlayer} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full text-center">
                        Play SinglePlayer Mode
                    </button>

                    {/* Multiplayer Option */}
                    <Link to={'/start'} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full text-center">
                        Play Multiplayer Mode
                    </Link>
                    </div>
                </Modal>
            </div>
        </>
    );
}

Modal.setAppElement('#root');

export default ReactModal;

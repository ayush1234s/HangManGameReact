import { useState } from "react";
import { useLocation } from "react-router-dom";
import PlayGame from "./PlayGame";
import useWordStore from "../stores/WordStores";

function PlayGameContainer(){

    const { wordList, word ,setWord} = useWordStore();//coming from the store or for the singlePlayer
    const {state} = useLocation();//for the multiPlayer

    var originalWord = state?.value || word?.wordSelected;
    const hint = state?.hint || word?.Hint;

    //this function will be called when we click on the new game button for single Player
    function onNewSinglePlayerGame(){
        const index = Math.floor(Math.random()*wordList.length);
        const wordSelected = wordList[index];
        console.log(wordSelected);
        setWord(wordSelected);
        setGuessedLetters([]);
        setStep(0);
    }

    
    //guessedLetter is an array
    const [guessedLetters,setGuessedLetters] = useState([]);
    const [step,setStep] = useState(0);

    function handleLetterClick(event){
        if(originalWord.includes(event.target.value)){
            console.log("Right Guess");
        }    
        else{
            console.log("Wrong Guess");
            setStep(step+1);
        }
        setGuessedLetters([...guessedLetters,event.target.value]);
    }


    originalWord = originalWord?.toUpperCase();
    

    return (
        <>
            { originalWord && 
                <PlayGame 
                hint={hint}
                originalWord={originalWord}
                guessedLetters={guessedLetters}
                step={step}
                handleLetterClick={handleLetterClick}
                onNewSinglePlayerGame={onNewSinglePlayerGame}
                />
            }
        </>
    );
}

export default PlayGameContainer;
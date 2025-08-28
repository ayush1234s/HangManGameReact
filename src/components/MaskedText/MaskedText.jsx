import { getMaskedList } from "./MaskingUtility";

//original Word ==>string
//guessedLetters ==> List
function MaskedText({originalWord , guessedLetters}){

    const maskedList = getMaskedList(originalWord,guessedLetters);

    return (
        <>
            {
                // rendering a list and string in the react
                maskedList.map((letter,index)=>{
                    return (
                        <span key={index} className="mx-1">
                            {letter}
                        </span>
                    );
                })
            }
        </>
    );
}

export default MaskedText;
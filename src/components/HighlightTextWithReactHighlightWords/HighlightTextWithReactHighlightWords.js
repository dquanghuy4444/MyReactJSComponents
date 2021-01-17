
import { useState } from "react";
import Highlighter from "react-highlight-words";

function HighlightTextWithReactHighlightWords() { 
    const [searchWords , setSearchWords] = useState(["and", "or", "the"]);
    const [textToHighlight , setTextToHighlight] = useState("The dog is chasing the cat. Or perhaps they're just playing?");

    const searchWordsToText = (searchWords)=>{
        return searchWords.join(" ");
    }

    const textToSearchWords = (text) =>{
        setSearchWords(text.split(" "));
    }

    return (
        <div>
            <input type="text" value={searchWordsToText(searchWords)} onChange={ (e) => { textToSearchWords(e.target.value) }}></input>
            <br></br>
            <br></br>
            <textarea style={{ width:"500px" , height:"100px"}} value={textToHighlight} onChange={ (e) => { setTextToHighlight(e.target.value) }}></textarea>
            <br></br>
            <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={searchWords}
            autoEscape={true}
            textToHighlight={ textToHighlight }
            />
        </div>

    );
}

export default HighlightTextWithReactHighlightWords;

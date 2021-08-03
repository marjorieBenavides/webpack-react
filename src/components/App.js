import React, { useState } from "react";

const InputDisplayer = () => {
    const [inputText, setInputText] = useState("");
    const [history, setHistory] = useState([]);
    return <div>
        <input placeholder="Enter some text" onChange={
            (e) => { setInputText(e.target.value); setHistory([...history, e.target.value]) }
        } /> <br />
        {inputText}
        <hr /> <br />
        <ul>
            {history.map((record, index) => {
                return <li key={index}>{record}</li>
            })}
        </ul>
    </div>
}

export default InputDisplayer;
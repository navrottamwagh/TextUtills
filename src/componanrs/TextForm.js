import React, { useState } from 'react'


export default function TextForm(props) {
    
      const  handle =()=>{
          console.log("you have click");
          let newText = text.toUpperCase();
          setText(newText);
          props.showAlert("Converted into the upper case", "success");
         
    }
    const  handleClear =()=>{
          console.log("you have click");
          let newText = "";
        setText(newText);
        props.showAlert("Cleared text", "success");
        }
      const  change =(event)=>{
                console.log("onChange");
                setText(event.target.value) ;
    }
     const  handleLow =()=>{
          console.log("you have click");
          let newText = text.toLowerCase();
         setText(newText);
          props.showAlert("Converted into the lower case", "success");
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
         props.showAlert("Copied the text", "success");
    }
    const handleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
         props.showAlert("Extra removed space", "success");
    }
    const [text, setText] = useState("");
    return (
        <>
        <div>
    
        
            <h1 style={{color: props.mode==='light'?'black':'white'}}> {props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  placeholder='Enter the note' value={text}  onChange={change} id="myBox" rows="8"></textarea>
            </div>
                <button type="button" onClick={handle}  className="btn btn-primary mx-3  my-2">Covert To UpperCase</button>
                <button type="button" onClick={handleLow} className="btn btn-primary mx-3 my-2">Covert To LowerCase</button>
                <button type="button" onClick={handleClear} className="btn btn-primary mx-3 my-2">Clear</button>
                <button type="button" onClick={handleCopy} className="btn btn-primary mx-3 my-2">Copy Text</button>
                 <button type="button" onClick={handleSpace} className="btn btn-primary mx-3 my-2">Remove extra spaces</button>
            </div>
            <div className='container my-3 ' style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Text Summary</h1>
                <p>{(text.split(/\s/).filter((e)=>{ return e.length !== 0}).length) } Word Count</p>
                <p>{text.length} Characters</p>
                <p>{0.08 * (text.split(/\s/).filter((e)=>{ return e.length !== 0}).length)} Read Time</p>
                <h2>Preview</h2>
                <textarea className="form-control" value={text} onChange={change} id="myBox" rows="4">{ text}</textarea>
            </div>
            </>
  )
}

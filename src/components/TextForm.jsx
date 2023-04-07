import { useState } from 'react'
import React from 'react'
import {PropTypes} from 'prop-types'
export default function TextForm(props) {
  const[text,setText]=useState(' ');
  const countLength=()=>{
    var count=0;
    var split = text.split(' ');
            for (var i = 0; i < split.length; i++) {
                if (split[i] != "") {
                    count += 1;
                }
            }
            return count;
  }
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!","success");
  }
  const handleDownClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!","success");
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
  }
  const handleInverseClick=()=>{
    let temp=text;
    let x = "";
    for (let i = 0; i < temp.length; i++) {
      let ch = temp[i];
      if(temp.charAt(i) === temp.charAt(i).toUpperCase())
        x += temp.charAt(i).toLowerCase(ch);
      else
        x += temp.charAt(i).toUpperCase(ch);
    }
    setText(x);
    props.showAlert("Converted to Inverse Case!","success");
  }
  const handleCamelCaseClick=()=>{
    
    let newText=text.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
    setText(newText);
    props.showAlert("Converted to Camel Case!","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  return (
    <>
    <div>
  <div className="mb-3" style={{color:props.mode=='light'?'black':'white'}}>
    <h1 className='my-2'>{props.heading}</h1>
    <textarea className="form-control"  style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#13466e':'white'}}value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter the text here'/>
  </div>
  <button disabled={text.length===0} className="btn btn-primary m-2"onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-secondary m-2"onClick={handleDownClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-danger m-2"onClick={handleClearClick}>Clear text</button>
  <button disabled={text.length===0} className="btn btn-success m-2"onClick={handleCamelCaseClick}>Camel Case</button>
  <button disabled={text.length===0} className="btn btn-warning"onClick={handleInverseClick}>Inverse Case</button>
</div>
   <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
    <h3><strong>Your text summary</strong></h3>
    <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{text.split(' ').filter((element)=>{return element.length!==0}).length*0.08} minutes to read it.</p>
    <h2>Preview:</h2>
    <p>{text.length>0?text:"Enter to preview!"}</p>
   </div>
</>
  )
}
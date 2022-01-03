import React , {useState} from "react";

export default function TextForm(props) {

  const [text , setText ] = useState('');


  const convertToUpp = () => {
    setText(text.toUpperCase());
    props.showAlert("Text Converted into Uppercase","success");
  }

  const onTextChange = (e) => {
    setText(e.target.value);
  }

  const convertToLow = () => {
      setText(text.toLowerCase());
      props.showAlert("Text Converted into Lowercase","success");
  }

  const clearText = () => {
      setText('');
      props.showAlert("Text was cleared","success");
  }

  const copyText = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied on Clicpboard","success");
  }

  const removeExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Removed extra Space","success");
  }

  const myStyle = {};
  let btnColor = 'primary';

  if(props.color === 'red' && props.mode === 'dark'){
    myStyle.color = '#f2f2f2'
    myStyle.backgroundColor = '#631919'
    btnColor = 'danger'
  } else if(props.color === 'green'){
    myStyle.color = '#f2f2f2'
    myStyle.backgroundColor = '#143b18'
    btnColor = 'success'
  }else if(props.color === 'blue'){
    myStyle.color = '#f2f2f2'
    myStyle.backgroundColor = '#042647'
    btnColor = 'primary'
  }else if( props.color == null && props.mode === 'dark'){
    myStyle.color = '#f2f2f2'
    myStyle.backgroundColor = '#3c3f42'
    btnColor = 'dark'
  }



  return (
      <>
    <div className="form-group" style={myStyle}>
      <h2 className="my-2" >{props.title}</h2>
      <textarea
        className="form-control"
        id="myBox"
        rows="8"
        value={text}
        onChange={onTextChange}
        placeholder="Enter Text"
        style={myStyle}
      ></textarea>

      <button disabled={text.length === 0} className={`btn btn-${btnColor} my-3 mx-1`} onClick={convertToUpp}>Convert to Uppercase</button>
      <button disabled={text.length === 0} className={`btn btn-${btnColor} my-3 mx-1`} onClick={convertToLow}>Convert to Lowercase</button>
      <button disabled={text.length === 0} className={`btn btn-${btnColor} my-3 mx-1`} onClick={clearText}>Clear Text</button>
      <button disabled={text.length === 0} className={`btn btn-${btnColor} my-3 mx-1`} onClick={copyText}>Copy Text</button>
      <button disabled={text.length === 0} className={`btn btn-${btnColor} my-3 mx-1`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={myStyle}>
        <h2>Text Summary</h2>
        <p>{  text.length > 0 ?  text.trim().split(/\s+/).length : 0} Words {text.replace(/ /g,'').length} Charecters</p>
        <p>Takes {text.length > 0 ?  text.trim().split(/\s+/).length * 0.008 : 0} Minutes to Read</p>
    </div> 
    </> 
  );
}

import React  from "react";

export default function About(props) {
   

  const myStyle = {};

  if(props.color === 'red' && props.mode === 'dark'){
    myStyle.color = '#f2f2f2'
    myStyle.backgroundColor = '#631919'
  } else if(props.color === 'green'){
    myStyle.color = '#f2f2f2'
    myStyle.backgroundColor = '#143b18'
  }else if(props.color === 'blue'){
    myStyle.color = '#f2f2f2'
    myStyle.backgroundColor = '#042647'
  }else if( props.color == null && props.mode === 'dark'){
    myStyle.color = '#f2f2f2'
    myStyle.backgroundColor = '#3c3f42'
   
  }



  
  return (
    <>
    <div className="container" style={myStyle}>
    <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne" >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              
              <strong>Analyze the Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          
          >
            <div className="accordion-body">
              TextUtil gives you a better way to analyze and modify youe text
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
           
          >
            <div className="accordion-body">
              It's completly free service. you don't need to pay for it.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             
             <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It's run on all Browsers.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

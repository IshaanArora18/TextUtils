import React,{useState} from 'react'

export default function About(props) {
  // const [myStyle,setMyStyle]=useState({
  //   backgroundColor:'white',
  //   color:'black'
  // }) 
  const [btnText,setbtnText]=useState('Enable Light Mode');
  let myStyle={
       color:props.mode==='dark'?'white':'black',
       backgroundColor:props.mode==='dark'?'black':'white',
  };
  // const toggleStyle=()=>{
  //   if(myStyle.color=='black'){
  //      setMyStyle({
  //       backgroundColor:'black',
  //       color:'white',
  //       border:'2 px solid'
  //      })
  //      setbtnText('Enable Light Mode');
  //       }
  //   else{
  //      setMyStyle({
  //       backgroundColor:'white',
  //       color:'black'
  //      })
  //      setbtnText('Enable Dark Mode');
  //   }
  // }
  return (
    <div className='container my-3' style={myStyle}>
        <h2>About us</h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Analyze your text
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          This application can be used to analyze text in the paragraph , apply various types of casing including camel case,upper case,lowe case and inverse casing. You can also get to know how much average time is required to read that text and how many words and characters are present in it.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Free to use
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          This application is free to use and is very much user oriented.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Browser Compatible
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          This application is browser compatible as it can be used on a mobile as well as laptop. You won't face any difficulty in analysing your text!
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

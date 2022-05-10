import React from 'react'

export default function Form() { 

  var original = document.getElementById('duplicater');

  const duplicate = () => {
    var clone = original.cloneNode(true);
    clone.id = ""; 
    original.parentNode.appendChild(clone); 
  } 
 
  return ( 
    <div>
      <div className='container border mt-5 p-4 ' style={{backgroundColor:"#061551", boxShadow:"0 10px 10px rgba(0,0,0,0.22)"}}>    
        <h2 className='mb-3 text-center text-light fw-bold'>Form</h2> 
        <div id="duplicater">  
          <div className='row'>
            <div className='col-6 input-div mt-2'>
              <input type="text" className="form-control input-box" /> 
            </div>
            <div className='col-6 input-div mt-2'>
              <input type="text" className="form-control input-box" />
            </div>
          </div>
        </div>
      </div>
      <div className='container mb-5'>
        <button type="button" className='mt-3 btn submit-btn'> Submit </button>
        <button type="button" className="mt-3 button float-end"  onClick={duplicate}> + </button>
      </div>
    </div>  
  )
} 

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
      <div className='container pt-4'>    
        <h2 className='mb-3 text-center fw-bold'>Form</h2> 
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
      <button type="button" className="mt-2 button float-end"  onClick={duplicate}> + </button>
    </div>  
  )
} 

import React from 'react'

export default function Form() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6 input-div my-5'>
                <input type="text" className="form-control input-box"/>
            </div>
            <div className='col-6 input-div my-5'>
                <input type="text" className="form-control input-box"/>
            </div>
            <button type="button" style={{width:"3.2%"}} class="btn btn-primary"> + </button>
        </div>
    </div>
  )
}

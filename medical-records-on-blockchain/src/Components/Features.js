import React from 'react'

export default function Features() {
    return (
        <div>
            <div className="container-fluid px-4 py-5" id="featured-3">
                <div className="row g-4 py-5 ">
                    <div className="feature col-4 m-auto feature-item">
                        <div className="feature-icon bg-primary bg-gradient">
                            {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg> */}
                        </div>
                        <h5 className='feature-title'>Our Story</h5>
                        <p className='feature-text'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div className="feature col-4 m-auto feature-item">
                        <div className="feature-icon bg-primary bg-gradient">
                            {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg> */}
                        </div>
                        <h5 className='feature-title'>Our Vision</h5>
                        <p className='feature-text'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div className="feature col-4 m-auto feature-item">
                        <div className="feature-icon bg-primary bg-gradient">
                            {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
                        </div>
                        <h5 className='feature-title'>Technology</h5>
                        <p className='feature-text'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

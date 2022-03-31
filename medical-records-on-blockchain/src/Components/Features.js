import React from 'react'
import FeatureIcon1 from "./icons/FeatureIcon1.PNG"
import FeatureIcon2 from "./icons/FeatureIcon2.PNG"
import FeatureIcon3 from "./icons/FeatureIcon3.PNG"

export default function Features() {
    return (
        <div>
            <div className="container-fluid px-4 py-5" id="featured-3">
                <div className="row g-4 py-5 ">
                    <div className="feature col-4 m-auto feature-item">
                        <div className="feature-icon">
                            <img  className="rounded mx-auto d-block pb-3" src={FeatureIcon1} alt="seclogo1" />
                        </div>
                        <h5 className='feature-title'>Our Story</h5>
                        <p className='feature-text'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div className="feature col-4 m-auto feature-item">
                        <div className="feature-icon">
                            <img  className="rounded mx-auto d-block pb-3" src={FeatureIcon2} alt="seclogo1" />
                        </div>
                        <h5 className='feature-title'>Our Vision</h5>
                        <p className='feature-text'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div className="feature col-4 m-auto feature-item">
                        <div className="feature-icon">
                            <img  className="rounded mx-auto d-block pb-3" src={FeatureIcon3} alt="seclogo1" />
                        </div>
                        <h5 className='feature-title'>Technology</h5>
                        <p className='feature-text'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

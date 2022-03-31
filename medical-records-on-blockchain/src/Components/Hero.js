import React from 'react'
import Hero1 from "./icons/Hero1.jpg"
import Hero2 from "./icons/Hero2.jpg"

export default function Hero() {
    return (
        <div className='hero-wrapper'>
            <h1 className='pt-5 hero-title'>How it works</h1>
            <div className="hero-container container px-4">
                <div className="row flex-lg-row align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={Hero1} className="hero-img d-block mx-lg-auto img-fluid" alt="can't display right now" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-3">Smart</h1>
                        <p className="hero-text">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>
            <div className="hero-container container px-4 mb-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={Hero2} className="hero-img  d-block mx-lg-auto img-fluid" alt="Can't display right now" width="492" height="327" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="mb-3">Fast</h1>
                        <p className="hero-text">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import carousel1 from "./icons/carousel1.jpg"
import carousel2 from "./icons/carousel2.jpg"
import carousel3 from "./icons/carousel3.jpg"

export default function Cover() {
    return (
        <div className='parent'>
            <div className="cover-outer">
                <div className="cover-inner p-3">
                    <div className="px-3">
                        <h1 className='cover-title'>The smartest way to manage your medical records</h1>
                        <p className="cover-subtitle">I'm a title. Click here to add your own text and edit me.</p>
                        <p>
                            <a href="/" className="cover-btn btn btn-lg">Learn more</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="" />
                    </div>
                </div>
            </div>
            <button className="c-btn-l carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="c-btn-r carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

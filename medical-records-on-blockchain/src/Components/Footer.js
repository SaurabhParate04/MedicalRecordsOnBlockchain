import React from 'react'

export default function Footer() {
    return (
        <div className='footer-container'>
            <section className="pt-5">
                <div className="row d-flex justify-content-center text-white">
                    <div className="col-lg-8 m-auto">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                            distinctio earum repellat quaerat voluptatibus placeat nam,
                            commodi optio pariatur est quia magnam eum harum corrupti
                            dicta, aliquam sequi voluptate quas.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="my-5 text-white m-auto" style={{width:"90%"}} />

            <section className="text-center pb-5">
                <a href="" className="text-white me-4">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-google"></i>
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="" className="text-white me-4">
                    <i className="fab fa-github"></i>
                </a>
            </section>
        </div>
    )
}

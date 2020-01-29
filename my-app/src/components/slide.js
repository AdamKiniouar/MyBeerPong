import React from 'react'
import { Slide } from 'react-slideshow-image'
import './slide.css'

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <li>
                        <a href="./boka">
                        <img src="Beer pong bord.jpg"/>
                        </a>
                        </li>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <li>
                    <a href="./boka">
                        <img src="images.jpg"/>
                        </a>
                     </li>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <li>
                        <a href="./boka">
                        <img src="ladda ned.jpg"/>
                        </a>
                     </li>
                    </div>
                </div>
            </Slide>
        </div>

    )
}
export default Slideshow;
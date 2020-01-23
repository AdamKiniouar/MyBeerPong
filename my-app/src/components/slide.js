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
                        <img src="https://www.belushis.com/__data/assets/image/0009/497277/20294349_1501730849865693_7094991970182993401_n.jpg"/>
                        </a>
                        </li>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <li>
                    <a href="./boka">
                        <img src="https://www.belushis.com/__data/assets/image/0009/497277/20294349_1501730849865693_7094991970182993401_n.jpg"/>
                        </a>
                     </li>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                    <li>
                        <a href="./boka">
                        <img src="https://www.belushis.com/__data/assets/image/0009/497277/20294349_1501730849865693_7094991970182993401_n.jpg"/>
                        </a>
                     </li>
                    </div>
                </div>
            </Slide>
        </div>

    )
}
export default Slideshow;
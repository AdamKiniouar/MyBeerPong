import React, { Component } from 'react';
import Slideshow from './slide.js';

class HomePage extends Component {
    render() {
        return (
        <div className="home-grid">
            <h3>Hyr ert beerpong bord enkelt och smidigt här!</h3>
            <h3>Tryck på knappen nedan för att komma till bokningssidan!</h3>
            <button className="btnColor">Boka!</button>
            <h1>       </h1>
                    <Slideshow />
        </div>
        )
    }
}
export default HomePage;
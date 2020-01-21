import React, { Component } from 'react';
import Slideshow from './slide.js';

class HomePage extends Component {
    render() {
        return (
        <div className="home-grid">
                    <Slideshow />
        </div>
        )
    }
}

export default HomePage;
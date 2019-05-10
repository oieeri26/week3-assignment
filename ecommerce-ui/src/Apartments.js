import React, { Component } from 'react';
import airbnbs from './airbnbs.json';
import Apartment from './Apartment'

class Apartments extends Component {
    render () {
        const apartments = airbnbs.map((apartment, idx) => <Apartment post={apartment} key={idx}/>);
        return (
            <div>
            <h1 id="header"><span>Apartments</span></h1>
            <div id="apartments">{apartments}</div>
            </div>
        )
    }
}

export default Apartments;
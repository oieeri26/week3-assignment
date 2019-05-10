import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';

class Apartment extends Component {
    render () {
        const apartment = this.props.post
        return (
            <div className="apartment">
                <div className="apartmentsImage"><img src={apartment.image} alt={apartment.title}/></div>
                <div className='title'>{apartment.title}</div>
                <div>House Type: {apartment.houseType}</div>
                <button type ="button">Add to Cart</button>
            </div>
        )
    }
}

export default Apartment;
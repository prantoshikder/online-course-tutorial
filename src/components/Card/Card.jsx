import React from 'react';
import './card.css'

const Card = (props) => {
    // console.log(props);
    const {image, courseName, courseDuration, price} = props.course;
    return (
        <div className="main">
            <div className="group-card col-12">
                <div className="card">
                    <div className="card-img">
                        <img src={image} alt=""/>
                    </div>
                    <div className="card-body">
                        <h3 className="font-weight-bold">{courseName}</h3>
                        <p className="font-weight-bold">Course Duration: {courseDuration}</p>
                        <h5 className="text-uppercase">price: ${price}</h5>
                        <button 
                        onClick={() =>props.handleEnrollNow(props.course)} 
                        className="btn btn-primary text-uppercase font-weight-bold" href="#">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
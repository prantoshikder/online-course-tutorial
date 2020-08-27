import React from 'react';
import './Course.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from '../Card/Card';
import Cart from '../cart/Cart';
import CourseData from '../CourseData/CourseData';
import { useState } from 'react';

const Course = () => {
    const course12 = CourseData.slice(0, 12);
    const [courses, setCourses] = useState(course12);
    const [cart, setCart] = useState([]);
    const handleEnrollNow = (course) =>{
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="courseArea">
            <div className="container">
                <div className="row">
                    <div className="courseArea col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                {
                                courses.map(course => <Card course={course} handleEnrollNow={handleEnrollNow}></Card>)
                                }
                            </div>
                            <div className="col-md-6">
                                {
                                courses.map(course => <Card course={course} handleEnrollNow={handleEnrollNow}></Card>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="cartArea col-md-4">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
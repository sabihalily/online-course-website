import React, { useState } from 'react';
import './MainPage.css';
import fakeData from '../../fakeData'
import Course from '../CoursePage/Course';
import Cart from '../Cart/Cart';

const MainPage = () => {
    const first12 = fakeData.slice(0,12);
    const [course, setCourse] = useState(first12);
    const [cart, setCart] =useState([]);

    const handleEnrollCourse = (course)=>{
        const newCart = [...cart,course];
        setCart(newCart);
    }
    return (
        <div className="page-container">
            <div className="course-container">
                {
                    course.map(cs=> <Course course={cs} handleEnrollCourse={handleEnrollCourse}></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default MainPage;
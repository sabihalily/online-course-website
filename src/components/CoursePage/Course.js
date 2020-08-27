import React from 'react';
import ReactPlayer from 'react-player';
import './Course.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Course = (props) => {
    const{courseLink, courseName, author, price} =props.course;
    
    return (
        <div className="course-area">
            <ReactPlayer url={courseLink}></ReactPlayer>
            <h2>{courseName}</h2>
            <p>Instructor: {author}</p>
            <h4>Price: ${price}</h4>
            <button className="btn btn-primary mt-5" onClick={()=>props.handleEnrollCourse(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Course;
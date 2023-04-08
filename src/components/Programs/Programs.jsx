import React from 'react';
import './Programs.css';
import{programsData}from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {  }
        <div classNams="programs-header">
            <span className='strote-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape your</span>
            </div>
         <div className="program-catogeries">
            {programsData.map((program)=>
            (
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                   <div className='join-now'><span>Join Now</span><img src={RightArrow}></img>
                  //  </div>
                   </div>
                   

            ))}      





        </div>


    </div>
);
};
export default Programs;
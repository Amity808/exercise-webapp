import React from 'react';
import { FaDumbbell } from "react-icons/fa";

const BodyPart = ({ item, bodyPart, setBodyPart}) => {
  return (
    <div style={{borderTop: bodyPart === item ? '4px solid #63CD37': '', backgroundColor: '0000', borderBottomLeftRadius: '20px', cursor: 'pointer'}} className='mt-8 hover:border-b-2 hover:border-lime-300' 
    onClick={() => {
      setBodyPart(item); 
      
      window.scrollTo({top:1800, left: 100, behavior: 'smooth'}) 
      }}>
        <FaDumbbell size={100} className=' items-center justify-center gap-11  p-7'/>
        <p className='text-lime-300 text-base font-medium hover:underline underline-offset-8'>{item}</p>
    </div>
  )
}

export default BodyPart
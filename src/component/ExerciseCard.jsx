import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const ExerciseCard = ({ item }) => {
  return (
    <Link className=' ' to={`exercise/${item.id}`}>
      <img src={item.gifUrl} alt={item.name} loading="lazy" className='hover:border-b-2 hover:border-lime-300 border-4' />
      <div className=' m-6 flex flex-row justify-between'>
        <button className='bn5'>
          {item.bodyPart}
        </button>
        <button className='bn5'>
          {item.target}
        </button>
      </div>
      <h1 className=' text-lime-300 text-base capitalize'>{item.name}</h1>
    </Link>
  )
}

export default ExerciseCard

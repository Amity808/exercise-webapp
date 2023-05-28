import React from 'react'
import Header from '../component/Header';
import { useState } from 'react';
import Exercise from './Exercise';
import SearchExercise from '../component/SearchExercise';

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  console.log(bodyPart)
  return (
    <div className=''>
      <Header />
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercise setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </div>
  )
}

export default Home

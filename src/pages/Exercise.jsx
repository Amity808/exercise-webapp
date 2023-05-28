import React from 'react'
import { useState, useEffect } from 'react'
import { Pagination } from '@mui/material'
import { exerciseOption, fetchData } from '../utils/fetchData'
import ExerciseCard from '../component/ExerciseCard'

const Exercise = ({ setExercises, exercises , bodyPart}) => {
  
  const [currentPage, setCurrentPage] = useState(1)

  const exercisePerPage = 9;

  const indexofLastExercise = currentPage * exercisePerPage;

  const indexofFirstExercise = indexofLastExercise - exercisePerPage;

  const currentExercise = exercises.slice(indexofFirstExercise, indexofLastExercise);

  const paginationPage = (e, value) => {
    setCurrentPage(value);

    window.scroll({ top: 1800, behavior: 'smooth'});
  }
  
  useEffect(() => {
    
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOption);
      }
    };
    fetchExercisesData();
    
  }, [bodyPart])
  
  


  return (
    <div id='exercise' className=' mt-8'>
      <h1 className=' text-lime-300 text-4xl m-6'>Showing Result</h1>
    <div className='flex flex-row flex-wrap justify-center gap-28 max-sm:gap-12'>
    {currentExercise.map((item, index) => (
      <ExerciseCard key={index} item={item} />
    ))}
    </div>
    <div className=' text-lime-300 flex justify-center items-center  mt-6'>
      { exercises.length > 9 && (
        <Pagination color='primary' count={Math.ceil(exercises.length / exercisePerPage)} 
        className=' text-lime-300 bg-white'
        defaultPage={1}
        page={currentPage}
        onChange={paginationPage}
        size='large'
        />
      )
      }
    </div>

    </div>
  )
}

export default Exercise

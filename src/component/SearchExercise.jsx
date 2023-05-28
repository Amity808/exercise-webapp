import React from 'react'
import { useState, useEffect } from 'react';
import { fetchData, exerciseOption } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercise = ({ bodyPart, setBodyPart, setExercises}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect (() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOption);

      setBodyParts(['all', ...bodyPartsData]);
    
    }
    
    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if(search) {
        const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);

        
        const SearchExercise = exerciseData.filter(
          (item) => item.name.toLowerCase().includes(search) 
          || item.target.toLowerCase().includes(search) 
          || item.equipment.toLowerCase().includes(search) 
          || item.bodyPart.toLowerCase().includes(search));
        setSearch('');
        console.log(search);
        setExercises(SearchExercise);
    }
  }
  return (
    <div className=' flex flex-col justify-center items-center text-center mt-20'>
      <h1 className=' uppercase text-lime-300 text-4xl font-extrabold p-10 max-sm:text-lg max-sm:font-semibold max-sm:p-5'>Exercise You need <br /> for your body</h1>
      <div className=' max-sm:flex max-sm:flex-row'>
      <input type="text" name="text" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} id="search-exercise" placeholder='Search Exercise'  className=' px-16 text-base outline-none py-4 max-sm:px-3 max-sm:py-2 max-sm:text-xs'/>
      <button className='px-10 py-4 bg-white/40 rounded-r-2xl text-lime-300 max-sm:px-4 max-sm:py-3' onClick={handleSearch}>Search</button>
      </div>
      <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </div>
  )
}

export default SearchExercise

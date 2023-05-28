import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Details from '../component/Details'
import ExerciseVideo from '../component/ExerciseVideo'
import SmilarExercises from '../component/SmilarExercises'
import { exerciseOption, fetchData, youtubeOptions} from '../utils/fetchData'

const Exercisepage = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setexerciseVideos ] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisedbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailsData = await fetchData(`${exercisedbUrl}/exercises/exercise/${id}`, exerciseOption)
      setExerciseDetails(exerciseDetailsData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailsData.name}`, youtubeOptions);
      setexerciseVideos(exerciseVideosData.contents);
      console.log(exerciseVideosData)
    }
  
    fetchExercisesData();
  }, [id])
  
  return (
    <div>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetails.name}/>
      <SmilarExercises />
    </div>
  )
}

export default Exercisepage

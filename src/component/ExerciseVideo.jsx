import React from 'react'

const ExerciseVideo = ({ exerciseVideos, name}) => {
  
  if(!exerciseVideos.length) return 'Loading....'
  return (
    <div className=' mt-14 max-sm:mt-5 p-5'>
      <p className=' mt-8 text-lime-300'>Watch <span className=' text-white capitalize'>{name}</span> Exercise Videos</p>
      <div className=' flex flex-wrap items-center max-sm:flex-row'>
        {exerciseVideos?.slice(0,3).map((item, index) => (
          <a key={index} className='' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer'>
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default ExerciseVideo
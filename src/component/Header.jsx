import React from 'react';
import exercise from '../assets/images/exercise.jpg';
import './header.css'

const Header = () => {
  return (
    <div className='flex flex-row justify-around items-center mt-8 max-sm:flex-col'>
      <div>
        <h1 className=' text-5xl mb-6 font-extrabold text-lime-300 max-sm:text-lg max-sm:font-normal max-sm:items-center'>Keep Your Body <br /> Fit & Strong</h1>
        {/* <a href="#exercise"><button className=' rounded-md bg-white/50 mt-8 text-lime-300 px-4 py-3 text-lg font-semibold max-sm:text-sm max-sm:m-5 max-sm:items-center'>Exercise</button></a> */}
        <a href="/" className="bn5 ">Exercise</a>
      </div>
      <div className='w-96 h-96 flex flex-row justify-center items-center max-sm:w-60 max-sm:h-60'>
        <img src={exercise} alt="" className='w-full h-full border-solid border-4 border-lime-300' />
      </div>
    </div>
  )
}

export default Header

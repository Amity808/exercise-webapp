import React from 'react'
import BodyPartImage from '../assets/icons/body-part.png'
import Target from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Details = ({ exerciseDetails }) => {

    const { bodyPart, gifUrl, name, target, equipment} = exerciseDetails;
    // console.log(gifUrl)
    const extraDetail = [

        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: Target,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]
  return (
    <div className=' flex max-lg:flex-row p-5 items-center justify-center max-sm:flex-col '>
      <img src={gifUrl} alt="" loading='lazy' className='ml-5' />
      <div className='ml-8 text-lime-300 max-sm:mt-5'>
        <p className=' text-xl'>{name}</p>
        <p className=' text-sm'>Exercises keep you fit and strong. {name} is one the exercise that can make you strong which target your {target}</p>
        {extraDetail.map((item) => (
            <div key={item.name} className=' flex flex-row items-center'>
                <img src={item.icon} alt={bodyPart} className='p-5'/>
                <p className=' capitalize'>{item.name}</p>
            </div>
            

        ))}
      </div>
    </div>
  )
}

export default Details

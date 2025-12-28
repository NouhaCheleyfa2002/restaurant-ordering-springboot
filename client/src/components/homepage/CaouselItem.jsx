import React from 'react'

const CaouselItem = ({ image , title}) => {
  return (
    <div className='flex justify-center items-center flex-col gap-3 pb-4'>
      <img className="w-40 h-40 lg:h-48 object-cover rounded-full object-center lg:w-48" src={image} alt="" />
      <span className="text-sm lg:text-base text-gray-400 font-semibold text-center block">{title}</span>
    </div>
  )
}

export default CaouselItem

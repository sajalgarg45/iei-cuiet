import React from 'react'

const TeamName = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-white px-6 font-bold text-[24px] font-poppins">{props.name}</div>
      <div className='w-full h-[1px] bg-white'></div>
    </div>
  )
}

export default TeamName

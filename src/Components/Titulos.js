import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

function Titulos({title, Icon}) {
  return (
    <div className='w-full flex sm:gap-8 gap-4 items-center'>
        <Icon className='sm:w-6 sm:h-6 w-4 h-4 text-subMain'/>
        <h2 className='sm:text-xl font-bold text-lg text-main'>{title}</h2>
        <button className='sm:w-6 sm:h-6 w-4 h-4 text-subMain'>
            <BsChevronRight size={20}/>
        </button>
    </div>
  )
}

export default Titulos
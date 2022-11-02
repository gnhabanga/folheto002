import React from 'react'
import Titulos from '../Titulos'
import {BsCollectionFill} from 'react-icons/bs'
import Folheto from '../Folheto';
import {Movies} from '../../Data/MovieData'

function FolhetosPopulares() {
  return (
    <div className='my-16'>
      <Titulos title="Folhetos Recomendados" Icon={BsCollectionFill} />
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {
          Movies.slice(0, 8).map((folheto, index)=>(
            <Folheto key={index} folheto={folheto} />
          ))}
      </div>
    </div>
  )
}

export default FolhetosPopulares
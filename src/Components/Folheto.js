import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

function Folheto({ folheto }) {
  return (
    <>
      <div className='border border-border p-1 houver:scale-95 transitions relative rounded overflow-hidden'>
        <Link to={`/movies/${folheto.name}`} className="w-full">
          <img src={require(`../assets/${folheto.image}`)} alt={folheto.name} className="w-full h-64 object-cover" />
        </Link>
        <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
          <h3 className='font-semibold truncate'>{folheto?.name}</h3>
          <button className="h-9 w-9 text-sm flex-colo transitions hover:big-transparent border-2 border-subMain rounded-md bg-subMain text-white">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  )
}

export default Folheto
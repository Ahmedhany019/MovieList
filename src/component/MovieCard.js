import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({movie}) {
    
  return (
    <div className='rounded-lg cursor-pointer group'>
        <Link to={`/movie/${movie.id}`}>
        <div className='relative'>
            <img src={`https://image.tmdb.org/t/p/w500/` +movie.poster_path} alt='poster' className='rounded-lg w-full h-full'/>
            <div className='rounded-lg overlay w-full h-full group-hover:bg-[#00000096] top-0 left-0 absolute'>
                <div className='hidden group-hover:flex flex-col items-center justify-center gap-y-2 text-white w-full h-full'>
                    <p>Title: {movie.title}</p>
                    <p>Date: {movie.release_date}</p>
                    <p>Vote: {movie.vote_count}</p>
                    <p>Rate: {movie.vote_average}</p>
                </div>
            </div>
        </div>
        </Link>
    </div>
  )
}

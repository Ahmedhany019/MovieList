import React from 'react'
import MovieCard from '../component/MovieCard'
import PaginationControlled from '../component/Pagination'

export default function MoviesList({movies, getPage,page}) {
    
  return (
    <div className='w-11/12 mx-auto py-10'>
        <div className='w-11/12 mx-auto py-10 grid grid-cols-5 gap-4'>
        {movies.length > 0 ? movies.map((movie)=>(<MovieCard key={movie.id} movie={movie}/>)): <h1>No Movies Found</h1>}
        </div>
        <PaginationControlled getPage={getPage} pagee={page}/>
    </div>
    
  )
}

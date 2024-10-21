import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function MovieDetails() {

  const [movieData, setMovieData] = useState([])

  const param = useParams();
  const getMovieDetails = async()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=en`)
    setMovieData(res.data)
  }

console.log(movieData);

  useEffect(()=>{
    getMovieDetails()
  },[])

  return (
    <div className='w-11/12 mx-auto my-10'>
      <div className='bg-[#eee] w-full rounded-lg card flex justify-center items-center '>
        <div className='h-[400px] w-full flex-1'>
          <img src={`https://image.tmdb.org/t/p/w500/` +movieData.poster_path} alt={movieData.title} className=' h-full object-contain'/>
        </div>
        <div className='flex-1 flex flex-col gap-2 justify-center items-center'>
          <p className='text-2xl font-bold text-red-400'>Move Name: <span className='text-black'>{movieData.title}</span></p>
          <p className='text-2xl font-bold text-red-400'>Move Date: <span className='text-black'>{movieData.release_date}</span></p>
          <p className='text-2xl font-bold text-red-400'>Vote: <span className='text-black'>{movieData.vote_count}</span></p>
          <p className='text-2xl font-bold text-red-400'>Rate: <span className='text-black'>{movieData.vote_average}</span></p>
        </div>
      </div>

      <div className='bg-[#eee] mt-10 h-[25%] w-full rounded-lg card relative'>
        <div className='p-4 flex flex-col gap-2 justify-center items-center'>
          <h1 className='text-2xl font-bold mr-auto  '>The Story:</h1>
          {movieData.length < 1 ? <p className='text-xl mr-auto font-light'>No Story Found </p> : <p className='text-xl mr-auto font-light'>{movieData.overview} </p>}
        </div>
      </div>
      <div className='my-10 flex gap-2 justify-center'>
        <Link to='/'>
          <button className='py-2 px-3 bg-slate-200 rounded-lg'>Back To Home</button>
        </Link>
        {movieData.homepage !== '' ? <Link to={movieData.homepage}>
          <button className='py-2 px-3 bg-slate-200 rounded-lg'>Watch Movie</button>
        </Link> : null}
      </div>
    </div>
  )
}

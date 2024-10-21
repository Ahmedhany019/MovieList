import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import './index'
import axios from "axios"
import MoviesList from './Page/MoviesList';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './Page/MovieDetails';

export default function App() {

  const [movies,setMovies] = useState([])
  const [page,setPage] = useState(0)

const getAllMovies =async ()=>{
  const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en')
  setMovies(res.data.results)
  setPage(res.data.total_pages)
}

const getPage =async (page)=>{
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en&page=${page}`)
  setMovies(res.data.results)
}

const search =async (word)=>{
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=en`)
  if(word ===''){
    getAllMovies()
  }else{
    setMovies(res.data.results)
    setPage(res.data.total_pages)
  }
}

useEffect(()=>{
  getAllMovies()
},[])
  return (

    <div className="App ">
      <Navbar search={search}/>
      <Routes>
        <Route path='/' element={<MoviesList movies={movies} getPage={getPage} page={page}/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}


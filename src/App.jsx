import React, { useEffect, useState } from 'react'
import { getMovieList, searchMovie } from './api'
import Component from './Component'


const App = () =>  {
  const [Movie, setMovie] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setMovie(result)
    })
  }, [] ) 

  // const MovieList = () => {
  //  return Movie.map((movies, i) => {
  //   return {
     
  //   }
  //  })
  // }

  const search = (q) => {
    console.log({q})
  }

  console.log({Movie: Movie})

  return (
    <>
    <div className='Container bg-gray-600 flex items-center justify-center box-border w-full py-4 px-5'>
      <div className='Header flex flex-col items-center gap-4'>
      <h1 className='text-white font-bold tracking-widest '> MY MOVIE LIST</h1>
        <input type="text" placeholder='Cari movie' className='p-3 focus:outline-none sm:w-full' onChange={({target}) => search(target.value)}/>
      <div className='Movie-Container p-5 w-full justify-center items-center flex flex-wrap gap-8 px- bg-slate-400'>
      {/* <div className='Movie-Wrapper flex flex-col items-center w-full h-full' >
        <div className='Movie-title'> </div>
        <img className='Movie-image' src="" alt="" />
        <div className='Movie-date'> </div>
        <div className='Movie-rate'>  </div>
        </div> */}
        {
        Movie.map((movies, i) => 
        (<Component key={i} title={movies.title} image={movies.poster_path} date={movies.release_date} rating={movies.vote_average}/>)
        )
      }
         
      </div>
      </div>
      </div>
    </>
  )
}

export default App

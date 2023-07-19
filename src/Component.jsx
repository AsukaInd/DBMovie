import React from 'react'

const Component = (props) => {
  return (
    <div className='Movie-Wrapper items-center w-full text-black px-2 py-3 shadow-inner bg-black shadow-white' >
        <div className='Movie-title flex justify-center font-bold text-white text-lg mb-4'>{props.title} </div>
        <img className='Movie-image bg-cover bg-no-repeat w-screen mx-auto mb-3' src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="" />
        <div className='Movie-date flex justify-center text-base text-white font-extrabold'> {props.date} </div>
        <div className='Movie-rate flex justify-center text-base text-white font-extrabold'>  {props.rating}</div>
    </div>
  )
}

export default Component
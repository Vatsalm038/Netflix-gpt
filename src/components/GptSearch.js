import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BGIMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
        <img
          src={BGIMG}
          alt="Logo"
        ></img>
      </div>
    <GptSearchBar />
    <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
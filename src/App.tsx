import React from 'react'
import Hero from './components/Hero'
import './sass/main.scss'
import GridTest from './components/GridTest'

const App = () => {
  return (
    <div className='body'>
      <Hero/>
      {/* This test helps to learn calc() and float features. */}
      <GridTest/>
    </div>
  )
}
export default App

import React from 'react'
import MultiStepForm from './components/MultiStepForm'

const MultiStepFormpage = () => {
  return (
    <div className='bg-white rounded-lg mx-4 p-4'>
        <h1 className='text-blue-400 text-2xl'>Multi Step Form Page</h1> 
        <br/>
        <br/>
        <br/>
        <MultiStepForm showStepNumber = {true}/>
        </div>
  )
}

export default MultiStepFormpage
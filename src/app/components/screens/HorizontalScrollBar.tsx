import React from 'react'

const HorizontalScrollBar = ({children}: any, scrollbar = true) => {
  return (
    <div className={`flex overflow-x-auto items-center space-x-2 p-4 border-gray-300 ${scrollbar ? "scrollbar-thin  scrollbar-thumb-blue-500 scrollbar-track-blue-200" : "scrollbar-none"} border-2 my-4`}>
      {children}
    </div>
  )
}

export default HorizontalScrollBar
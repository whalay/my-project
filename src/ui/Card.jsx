import React from 'react'

const Card = (props) => {
  return (
    <div className="container max-w-[450px] md:max-w-full h-screen bg-[#1E1E1E] text-white px-1 md:pt-20 md:pl-24 z-50">
        {props.children}
    </div>
  )
}

export default Card;
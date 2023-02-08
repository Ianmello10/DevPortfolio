import React from 'react'

function CardStack({titulo, description, children}) {
  return (
    <div
    className="shadow-md  w-[90%] md:w-[70%] mx-auto mb-6 lg:w-[23%] border-2
   border-gray-600 rounded-md h-auto py-2 px-2 flex flex-col justify-between"
  >
    <h2 className="text-xl">{titulo}</h2>
    <p className="text-sm mt-2">
    {description}
    </p>

    <div className="w-full flex justify-end h-12   items-center mt-2">
        {children}
    </div>
  </div>
  )
}

export default CardStack
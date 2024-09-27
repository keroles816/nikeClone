import React from 'react'
import { star } from '../assets/icons'
const CustomersReviews = ({rating, feedback,
    imgURL, customerName
}) => {
  return (

    <div className=' flex flex-col justify-center items-center'>

        <img src={imgURL} 
        alt="customerName" 
        width={120}
        height={120}
        className=' rounded-full object-cover '
        />
        <p className=' max-w-sm mt-6 text-center font-montserrat text-2xl
         text-slate-gray leading-10'>{feedback}</p>

         <div className='flex gap-2.5 mt-3 items-center justify-center' >
            <img src={star} 
            alt="star"
            width={24}
            height={24}
            className=' object-contain m-0'

            />
            <p className='text-slate-gray font-montserrat text-xl'>
               ({rating})

            </p>
            
         </div>

         <h3 className='mt-1 text-center 
          text-3xl font-bold  font-palanquin' >
            {customerName}</h3>

    </div>

  )
}

export default CustomersReviews
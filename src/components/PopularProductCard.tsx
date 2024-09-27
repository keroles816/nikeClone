import React from 'react'
import {star} from '../assets/icons'

const PopularProductCard = ({imgURL,price,name}) => {
  return (
    <div className=' flex flex-col  flex-1 w-full max-sm:w-full'>
        <img src={imgURL} 
        width={120}
        height={120}
        className=' w-[280px] h-[280px] '
        alt={name} />

        <div className=' mt-8 flex justify-start gap-2.5'>

            <img src={star} alt="start" 
            width={24}
            height={24}
            />
            <p className=' leading-normal text-slate-gray 
            font-montserrat text-xl'>(4.5)</p>

        </div>
        <h3 className=' mt-2 text-2xl font-semibold font-palanquin
         leading-normal '>{name}</h3>
        <p className=' text-xl font-montserrat mt-2 
         text-coral-red
        '>{price}</p>
    </div>
    
  )
}

export default PopularProductCard
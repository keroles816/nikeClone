import React from 'react'

const ServicesCard = ({ imgURL,label,subtext}) => {
  return (

    <div className=' flex 
      shadow-3xl rounded-[20px] 
     py-16 px-10 flex-1 w-full sm:w-[350px] sm:min-w-[350px]
      flex-col '>

        <div className=' flex justify-center 
        items-center bg-coral-red  rounded-full w-11 h-11' >
        <img src={imgURL} 
        alt="label"
        width={24}
        height={24}
        
         />
        </div>
       
         <h3 className=' text-3xl 
         font-palanquin font-bold mt-5 '>
            {label}
         </h3>
         <p className=' mt-3 text-slate-gray
          break-words text-lg font-montserrat'>{subtext}</p>


    </div>
  )
}

export default ServicesCard
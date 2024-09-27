import React from 'react'

const Button = ({label, iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth
}) => {
  return (
    <button  className={`
     ${fullWidth ? "w-full" : "w-fit"} flex justify-center
     items-center
     
     px-7 py-4 rounded-full
       text-lg
       leading-none
       border

       ${backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor}`
        : "bg-coral-red text-white  border-coral-red"
      } 
      

       font-montserrat
      
        `}>
      {label}
 {iconURL && <img 
  src={iconURL  }
   alt="arrow right"
   width={20}
   height={20}
   className='ml-2 rounded-full
   w-5 h-5' 
   />}
    </button>
  )
}

export default Button


import {headerLogo} from '../assets/images'
import {navLinks}  from '../constants/index'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className=' padding-x py-8  absolute z-10 w-full' >
      <nav className='flex justify-between items-center'>
        <a href="/">
        <img 
        width={150}
        height={50}

        src={headerLogo} 
        alt="header logo" />  
        </a>

        <ul className='flex flex-1 gap-16 justify-center items-center  max-lg:hidden' >
         
         {navLinks.map((link)=>(
          <li key={link.label} >
            <a href={link.href}
            className={`${link.label ==='Sign In / Explore now' ?
               "font-bold" :
                "text-lg font-montserrat leading-normal text-slate-500"}`}
            >
              
            {link.label}
            
            </a></li>
         ))}
   
        </ul>


        <div className='hidden  max-lg:block'>
          
         <img 
         src={hamburger}
          alt="hamburger" 
          width={25}
          height={25}
          />


         </div>

      </nav>
       


    </header>
    
  )
}

export default Nav
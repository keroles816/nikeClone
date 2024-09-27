import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics,shoes } from "../constants"
import {bigShoe1} from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
   <section 
   id="home"
   className=" 
   w-full 
   flex 
   justify-center
    xl:flex-row 
    flex-col 
     min-h-screen
     gab-10
     max-container
     z-10
    "
   >
    <div className=" relative xl:w-2/5 flex-col justify-center
     items-start w-full max-xl:padding-x pt-40">
      <p className=" text-xl font-montserrat text-orange-400">our Summer Collection</p>
      <h1 className=" text-8xl font-palanquin 
      mt-10
      max-sm:text-[72px]
       max-sm:leading-[80px]
       font-bold
      ">
      <span  className="
     
       xl:bg-white
       xl:whitespace-nowrap
       relative z-10 pr-10
      " >the New Arrival</span> 
      <br/>
      <span className=" text-orange-400 mt-3 inline-block" >Nike</span>  Shoes
     
        </h1>
        <p className=" sm:max-w-sm fonnt-montserrat mb-14 mt-6 leading-8 text-lg text-gray-500">Discover stylish nike arrivals quality comfort and innovations for you active life </p>

        <Button label="Show now " iconURL={arrowRight}/>


        <div className=" flex justify-start items-start flex-wrap mt-20
        w-full gap-16
        max-xl:mb-20
        ">
           {statistics.map((statck)=>(
            <div>
              <p className="text-4xl max-sm:text-[32px] font-palanquin font-bold ">{statck.value}</p>
              <p className="text-lg font-montserrat text-gray-500">{statck.label}</p>
            </div>
           ))}
        </div>
      
    </div>
           <div className="flex
            relative 
             items-center
            flex-1
             justify-center xl:min-h-screen max-xl:py-40  
           bg-primary bg-hero  bg-cover bg-center ">
            
            <img src={bigShoeImg} 
            alt="big shoe"
            width={670}
            height={500}
            className=" object-contain relative z-10"
            />
            <div className=" 
            absolute
            bottom-[-5%]
             mx-auto  
             max-sm:px-6
            flex 
            justify-center 
             items-end
             border-transparent
             gap-10
             sm:ga-6
             w-ful
             border-none
            ">
              {shoes.map((shoe)=>(
                <div key={shoe.thumbnail}>
                  <ShoeCard
                changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)}
                  imgUrl={shoe}
                  bigShoeImg={bigShoeImg}

                  />
                </div>
              ))}
            </div>

           </div>
   </section>
  )
}

export default Hero
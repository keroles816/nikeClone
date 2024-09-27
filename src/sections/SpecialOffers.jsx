import {offer} from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
const SpecialOffers = () => {
  return (
   <section className=" flex max-container  justify-center
   items-center max-xl:flex-col-reverse gap-10 "> 
   <div className=" flex-1">
    <img src={offer} alt="offer"
    width={773}
    height={687}
    className=" object-contain "
    />
   </div>

   <div className="flex flex-1 flex-col ">

    <h2 className=" text-4xl font-palanquin 
    capitalize lg:max-w-lg
   
     font-bold
    ">
      
    <span className=" text-orange-400 ">Special </span>  

      Offer
      </h2>
      <p className=" 
       mt-4
       lg:max-w-lg
       info-text
       ">Discover stylish nike
        arrivals quality comfort 
        id quae cum aspernatur nisi tempore tenetur, 
        non sapiente   Qui et ab quam officiis quisquam minus suscipit ad accusantium? 
        Libero rerum temporibus repellendus ab a.
         Exercitationem reprehenderit possimus cumque consequuntur repellendus!
        </p>
        <p className=" mt-6 info-text lg:max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tempora pariatur mollitia tenetur aspernatur delectus unde 
          aperit accusamus aliquam officiis repellat sequi rerum!</p>

            <div className="mt-11 flex flex-wrap gap-4">

            <Button label="Shop now " iconURL={arrowRight} />
            <Button label="Learn more " 
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"

            />
            </div>


    </div>
    </section>
  )
}

export default SpecialOffers
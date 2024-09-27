import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className=" flex
     w-full max-container
     max-lg:flex-col gap-10 justify-between 
     items-center">

      <div className="flex flex-1 flex-col ">
      <h2 className=" text-4xl font-palanquin 
      capitalize lg:max-w-lg
     
       font-bold
      ">
        we provide you
      <span className=" text-orange-400 ">super  </span>  
      <span className=" text-orange-400 ">quality </span> 
     Shoes
        </h2>
        <p className=" 
         mt-4
         lg:max-w-lg
         info-text
         ">Discover stylish nike
          arrivals quality comfort 
          and innovations for you active life 
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Culpa quod nulla voluptas reiciendis dolorum,
            dolor corrupti id quae cum aspernatur nisi tempore tenetur, 
          non sapiente laudantium minima iusto neque nesciunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Qui et ab quam officiis quisquam minus suscipit ad accusantium? 
          Libero rerum temporibus repellendus ab a.
           Exercitationem reprehenderit possimus cumque consequuntur repellendus!
          </p>
          <p className=" mt-6 info-text lg:max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora pariatur mollitia tenetur aspernatur delectus unde 
            aperiam nisi, eius omnis voluptatum repudiandae 
            quia corporis ut accusamus aliquam officiis repellat sequi rerum!</p>
              <div className="mt-11">

        <Button label="view Details " />
              </div>


      </div>
      <div className=" md:mt-10 flex flex-1 justify-center items-center">
        <img src={shoe8}
         alt="shoe8"
         width={570}
         height={522}
         className=" object-contain"
         />
      </div>

    </section>
  )
}

export default SuperQuality
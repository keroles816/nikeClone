import { reviews } from "../constants"
import CustomersReviews from "../components/CustomersReviews"
const CustomerViews = () => {
  return (
   <section>
    <div className=" max-container ">
      <h3 className=" font-bold text-center text-4xl font-palanquin">
        What our
        <span className=" text-coral-red ">Customers </span>
        Say?
      </h3>
      <p className="  m-auto mt-4 info-text max-w-lg text-center">
        Hear Lorem ipsum dolor 
        sit amet consectetur,
         adipisicing elit. Exercitationem a eaque ratione 
         distinctio debitis ipsa ad delectus
          enim quibusdam excepturi? Laudantium, quas architecto.
           Amet distinctio aspernatur consequatur possimus, 
        dignissimos adipisci!</p>
        <div className="mt-24 flex flex-1 justify-evenly 
        items-center max-lg:flex-col gap-14">
          {reviews.map((review)=>(
            <CustomersReviews key={review.name} {...review}/>
          ))}

        </div>
    </div>
   </section>
  )
}

export default CustomerViews
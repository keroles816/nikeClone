import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
   <section id="products"
   className=' max-container max-sm:mt-12'
   >

    <div className=' flex justify-start flex-col gap-5'>
      <h2 className=' text-4xl font-palanquin font-bold' >
        Our<span className='text-coral-red'> Popular</span> products</h2>
      <p className='mt-2 lg:max-w-lg text-lg font-montserrat
       text-slate-500 leading-7'>
        Expirence top notch quality and style with our sought after selections. 
        Discover a world of comfort design ,and value </p>

    </div>
    <div className=' grid mb-16 mt-16  lg:grid-cols-4 
     md:grid-cols-3 
    sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 '>
      {products.map((product)=>(
        <PopularProductCard key={product.name} {...product}/>
      ))}
    </div>

   </section>
  )
}

export default PopularProducts
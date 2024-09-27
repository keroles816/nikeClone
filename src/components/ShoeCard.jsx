
const ShoeCard = ({changeBigShoeImage,imgUrl,bigShoeImg}) => {
  
  const handleClick = () => {
    if(bigShoeImg !==imgUrl.bigShoe){
      changeBigShoeImage(imgUrl.bigShoe)
    }
  }
  return (
  

    <div className={`border-2 rounded-xl  ${bigShoeImg === imgUrl.bigShoe?
      'border-coral-red': 'border-transparent'} cursor-pointer max-sm:flex-1 border-r-2 ` }
   onClick={handleClick} >

   <div className="
   flex justify-center items-start
   bg-card bg-center
   sm:h-40 
   sm:w-40
   
    rounded-xl 
    max-sm:p-4
    
    ">
    <img
    width={250}
    height={250}
    src={imgUrl.thumbnail} alt="thumbnail" />
   </div>
    </div>
  )
}

export default ShoeCard
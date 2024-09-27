
import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section className=" max-container flex justify-between
    items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className=" text-4xl 
       leading-[68px]
       font-palanquin font-bold
      ">
        Sign up for
        <span className=" text-coral-red "> Updates</span>&
        Newsletter
      </h3>
      <div className=" lg:max-w-[40%] w-full 
      flex items-center border rounded-full border-slate-gray 
      p-3 max-sm:flex-col" > 
        <input type="text"
        placeholder="Subscripe@nike.com "
        className="input" />
        <div className=" flex max-sm:justify-end items-center
        max-sm:w-full">
      <Button
      label="sign up"
      fullWidth
      />
        </div>
      </div>

    </section>
  )
}

export default Subscribe
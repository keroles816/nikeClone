import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
   <footer className=" max-container ">
    <div className=" flex justify-between 
    itemss-start gap-20 flex-wrap max-lg:flex-col ">

       <div className=" flex flex-col items-start">
        <a href="/">
        <img src={footerLogo} 
        alt="footerlogo"
        width={150}
        height={46}
        />

        </a>
        <p className=" text-xl 
        mt-6 leading-7 font-montserrat
        sm:max-w-sm
         text-pale-blue">Lorem ipsum, dolor
           sit amet consectetur
            adipisicing elit. Atque error nisi
             qui rerum praesentium exercitationem corporis, 
             qui rerum praesentium exercitationem corporis, 
             qui rerum praesentium exercitationem corporis, 
           deleniti? Architecto.</p>

           <div className=" mt-10 flex items-center gap-6">

            {socialMedia.map((social)=>(
              <div className=" flex justify-center
               items-center bg-white h-12 w-12 rounded-full">
              <img key={social.alt}
               src={social.src} 
              alt={social.alt}
              width={24}
              height={24}
              />
              </div>
            ))}

           </div>

       </div>

        <div className=" flex flex-1 
        justify-between lg:gap-10 gap-20
         flex-wrap ">
          {footerLinks.map((footerLink)=>(
            <div key={footerLink}>
              <h3 className=" text-3xl text-white 
              font-palanquin font-medium leading-normal
              mb-6
              ">
                {footerLink.title}
              </h3>
                  <ul>
                    {footerLink.links.map((link)=>(
                       <li
                       className=" text-white
                       -400 mt-3 text-lg 
                        hover:text-slate-gray
                       font-montserrat
                        cursor-pointer
                       "
                       key={link.name}>
                        <a href={link.link}>
                           {link.name}
                        </a>
                        </li>
                    ))}
                  </ul>
            </div>
          ))}
         </div>
    </div>

    <div className=" flex justify-between text-white-400 
     mt-24 max-sm:flex-col max-sm:items-center
    ">
     <div className=" flex flex-1 justify-start
     items-center gap-2 font-montserrat ">
      <img src={copyrightSign} alt="copyright"
      height={20}
      width={20}
      className=" rounded-full m-0"

      />
      <p>copyright 2022. all rights reserved</p>
     </div>
      <p className=" font-montserrat ">Powered by Webflow</p>
    </div>
    
   </footer>
  )
}
export default Footer

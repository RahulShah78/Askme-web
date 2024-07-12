import React from "react";
import { MdOutlineEmail,MdLocationOn } from "react-icons/md";
import { FaWhatsapp,FaSkype } from "react-icons/fa";


const Navbar1 = () =>{
    return(
        <div className=" flex justify-between sm:py-5 p-2">
        <div className=" gap-2 px-1 flex-col sm:flex-row flex sm:gap-4 sm:py-0 sm:px-12">
        <div className=" flex items-center gap-2 ">
        <MdOutlineEmail className="text-[#4c8b81]" />
        <a href="info" className="text-[10px] sm:text-sm font-semibold">info@askmetechnologies.com</a>
        </div>
        <div className="flex items-center gap-2">
            <MdLocationOn className="text-[#4c8b81]" />
            <span className="text-[10px] sm:text-sm font-semibold">Plot No. A-25, Suite No. 102, Sector - 63, Noida, U.P.</span>
        </div>
        </div>
        <div className=" gap-2 flex-col sm:flex-row flex sm:py-0 sm:px-12 sm:gap-8">
            <div className=" flex items-center gap-2">
               <FaWhatsapp className="text-[#4c8b81]" />
                <span className="text-[10px] font-semibold sm:text-sm">+91-6391654204</span>
            </div>
           <div className="flex items-center gap-2">
               <FaSkype className="text-[#4c8b81]" />
               <span className="text-[10px] sm:text-sm font-semibold">contact with us</span>
           </div>
        </div>
        </div>
    )
}

export default Navbar1;
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import ServiceSubmenu from "../Child/ServiceSubmenu";
import HireDevelopersSubmenu from "../Child/HireDevelopers-Submenu";
import IndustriesSubmenu from "../Child/Industries-Submenu";
import CompanySubmenu from "../Child/Company-Submenu";


const Navbar2 = () => {
    
    const [tuggle,setTuggle] = useState(true);
    const [hiredevTuggle,setHiredevTuggle] = useState(true);
    const [indTuggle,setIndTuggle] = useState(true);
    const [comTuggle,setComTuggle] = useState(true); 

    const handlemouseenter = () =>{
        setTuggle(false);
    }
    const handlemouseLeave = () =>{
        setTuggle(true);
    }
    const handleHireDevIn = ()=>{
        setHiredevTuggle(false)
    }
    const handleHireDevLeave = ()=>{
        setHiredevTuggle(true);
    }
    const handleIndIn = () =>{
        setIndTuggle(false);
    }
    const handleIndLeave = () =>{
        setIndTuggle(true);
    }
    const handleComIn = () =>{
        setComTuggle(false);
    }
    const handleComLeave = () =>{
        setComTuggle(true);
    }
 
    return (
        <div>
            <hr />
            <div className=" flex justify-between">
                
                <img className="pl-12 h-10 mt-2" src="http://askmetechnologies.com/images/logo.svg" alt="logo" />
                <ul className=" flex items-center gap-8 text-[#022d62]">
                    <li className="text-lg font-semibold" ><Link to='/home'>Home</Link></li>
                  
                    {
                        tuggle ? <li  onMouseEnter={handlemouseenter} 
                        onMouseLeave={handlemouseLeave}
                        className="flex items-center gap-1 text-lg font-semibold hover:text-[#4c8b81]"
                        >Services <IoIosArrowDown /> </li>
                        :
                        <>
                        <li onMouseEnter={handlemouseenter} 
                        onMouseLeave={handlemouseLeave}
                        className="flex items-center gap-1 text-lg font-semibold hover:text-[#4c8b81]"
                        >Services <IoIosArrowUp />  </li>
                        <ServiceSubmenu />
                        </>
                    }
                    
                    {
                        hiredevTuggle ? <li 
                        onMouseEnter={handleHireDevIn} 
                        onMouseLeave={handleHireDevLeave}
                        className="flex items-center gap-1 text-lg font-semibold hover:text-[#4c8b81]"
                        >Hire Developers <IoIosArrowDown /> </li>
                        :
                        <>
                        <li onMouseEnter={handleHireDevIn} 
                        onMouseLeave={handleHireDevLeave}
                        className="flex items-center gap-1 text-lg font-semibold hover:text-[#4c8b81]"
                        >Hire Developers <IoIosArrowUp />  </li>
                        <HireDevelopersSubmenu />
                        </>
                    }
                    
                
                    {
                        indTuggle ? <li onMouseEnter={handleIndIn} 
                        onMouseLeave={handleIndLeave}
                        className="flex items-center gap-1 text-lg font-semibold hover:text-[#4c8b81]"
                        >Industries <IoIosArrowDown /> </li>
                        :
                        <>
                        <li onMouseEnter={handleIndIn} 
                        onMouseLeave={handleIndLeave}
                        className="flex items-center gap-1 text-lg font-semibold hover:text-[#4c8b81]"
                        >Industries <IoIosArrowUp />  </li>
                        <IndustriesSubmenu />
                        </>
                    }


                    <li className="text-lg font-semibold"><Link to='/portfolio'>Portfolio</Link></li>

                    
                    
                    {
                        comTuggle ? <li onMouseEnter={handleComIn} 
                        onMouseLeave={handleComLeave}
                        className="flex items-center gap-1 text-lg font-semibold hover:text-[#4c8b81]"
                        >Company <IoIosArrowDown /> </li>
                        :
                        <>
                        <li onMouseEnter={handleComIn} 
                        onMouseLeave={handleComLeave}
                        className="flex items-center gap-1 text-lg font-semibold hover:text-[#4c8b81]"
                        >Company <IoIosArrowUp />  </li>
                        <CompanySubmenu />
                        </>
                    }                    
                </ul>
                <button className="mr-11 h-11 mt-2 border-none outline-none rounded-lg p-2 text-xl font-semibold text-white bg-[#4c8b81] hover:cursor-pointer hover:bg-[#022d62] duration-700">Request Quote</button> 
            </div>
        </div>
    );
};

export default Navbar2;

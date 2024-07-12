import React from "react";
import {Link} from 'react-router-dom';
import MainJsonData from './main.json'

const ServiceSubmenu = () =>{ 
    return (
        <div className="flex bg-white z-10 items-center w-1/2 shadow-lg  flex-row flex-wrap p-2 rounded absolute top-1/4  left-1/4"> 
          {
            MainJsonData.submenu[0].Objects.Categories.map(item =>(
                <div className="flex flex-col w-1/4 p-4" >
                    <h4 className="text-[#022d62] font-bold pt-6">{item.category}</h4>
                    {item.links.map(menus =>(
                    <Link className="text-[#022d62]">{menus.navigatePage}</Link>
                ))}
                </div>
            ))
          }
        </div>
    )
}
export default ServiceSubmenu;
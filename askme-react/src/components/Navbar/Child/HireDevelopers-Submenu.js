import React from "react";
import {Link} from 'react-router-dom';
import MainJsonData from './main.json'


const HireDevelopersSubmenu = ()=>{
    return(
      <div className="flex  bg-white z-10 items-center w-1/2 shadow-lg flex-wrap p-4 rounded absolute top-1/4 left-1/3 ">
        {
            MainJsonData.submenu[1].Objects.Categories.map(item =>(
                <div className="flex flex-col p-4 w-1/4" >
                    <h4 className="font-bold">{item.category}</h4>
                    {item.links.map(menus =>(
                    <Link>{menus.navigatePage}</Link>
                ))}
                </div>
            ))
          }
      </div>
    )
}
export default HireDevelopersSubmenu;
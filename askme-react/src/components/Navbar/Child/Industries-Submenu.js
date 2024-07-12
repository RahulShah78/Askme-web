import React from "react";
import {Link} from 'react-router-dom';
import MainJsonData from './main.json';


const IndustriesSubmenu = ()=>{
    return(
      <div className="flex  bg-white z-10 flex-col shadow-lg p-4 rounded absolute top-1/4 left-1/2 w-2/12">
        {   
            MainJsonData.submenu[2].Objects.Categories.map(item => (
                <Link>{item.category}</Link>
            ))
        }
      </div>
    )
}

export default IndustriesSubmenu;
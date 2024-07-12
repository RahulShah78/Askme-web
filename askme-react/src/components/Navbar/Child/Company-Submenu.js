import React from "react";
import {Link} from 'react-router-dom';
import MainJsonData from './main.json'

const CompanySubmenu = ()=>{
    return(
      <div className="flex  bg-white z-10 flex-col shadow-xl p-4 rounded absolute top-1/4 left-2/3 w-2/12">
        {   
            MainJsonData.submenu[3].Objects.Categories.map(item => (
                <Link>{item.category}</Link>
            ))
        }
      </div>
    )
}

export default CompanySubmenu;
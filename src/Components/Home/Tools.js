import React, { useEffect, useState } from 'react';
import Search from './Search';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://manufacturer-website-rupsa23.onrender.com/tools')
        .then(res => res.json())
        .then(data => setTools(data)); 
    })

    // const handleSearch = (items) => {
    //     // console.log("HANDELSEARCh: "+JSON.stringify(items));
    //     // console.log("HANDELSEARCh: "+items);
    //     setTools(items);
    //     // console.log("DONE");
    // }
   
    
    return (
        <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12 mb-10">
            {
                tools.map(tool => <Tool 
                key={tool._id}
                tool={tool}
                ></Tool>)
            }
         </div>
        </div>
    );
};

export default Tools;






import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    })

    return (
        <div>
         <h4 className="text-3xl mt-5 font-bold text-center text-teal-500">Tools</h4>
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






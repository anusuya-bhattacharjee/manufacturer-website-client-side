import React, { useEffect, useState } from 'react';
import AllTool from './AllTool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    
    useEffect(() => {
        fetch('https://manufacturer-website-rupsa23.onrender.com/tools')
        .then(res => res.json())
        .then(data => setTools(data))
    })

    const handleDeleteTools = (id) => { 
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          console.log("deleting user with id, ", id);
          const url = `https://manufacturer-website-rupsa23.onrender.com/delete/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                console.log("deleted");
                const remaining = tools.filter((tool) => tool._id !== id);
                setTools(remaining);
              }
            });
        }
      };

    return (
        <div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                tools.map(tool => <AllTool 
                key={tool._id}
                tool={tool}
                handleDeleteTools={handleDeleteTools}
                ></AllTool>)
            }
         </div>
        </div>
    );
};

export default Tools;
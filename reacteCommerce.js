import { React, useEffect, useState } from "react";

    const [curState, setCurState] = useState([]);
    function buyItem() {
        const data = fetch('//dummyjson.com/test').then(res => res.json()).then(console.log);
        setCurState(data)
    }

    async function populateData() {
        const response = await fetch('//dummyjson.com/test').then(res => res.json()).then(console.log);
        const data = await response.json();
        setCurState({ curState: data });
    }
    
    useEffect(() => {
        populateData();
        }, []);

    return (
        <div>
            {curState}
        </div>
  );

export default buyItem;

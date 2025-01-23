import { useState } from "react";
import Nav from "./Nav";
import Plants from "./Plants";
import list from "./data";

function Display({cart,setCart}) {
    //const [cart,setCart]=useState([]);

    const handleClick = (item) => {
        let isPresent=false;
        cart.forEach((product)=>{
            if(item.id===product.id)
                isPresent=true;
        })
        if(isPresent)
            return;
       setCart([...cart,item]);
    };
    
    return (
        <div>
    <Nav size={cart.length} />
    <center><h3>Air Purifying Plants</h3></center>
    <div className="row1">
        {list
            .filter((item) => item.id < 7) // Only items with id < 7
            .map((item) => (
                <Plants item={item} key={item.id} handleClick={handleClick} />
            ))}
    </div>
    <center><h3>Aromatic Fragrant Plants</h3></center>
    <div className="row1">
        {list
            .filter((item) => item.id >= 7) // Only items with id >= 7
            .map((item) => (
                <Plants item={item} key={item.id} handleClick={handleClick} />
            ))}
    </div>
</div>

    );
}

export default Display;

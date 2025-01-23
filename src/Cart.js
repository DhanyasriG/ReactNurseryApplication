import { useEffect, useState } from "react"
import Nav from "./Nav"
import {  useNavigate } from "react-router-dom";

function Cart({cart,setCart,handleChange}){
    const [price,setPrice]=useState(0);

    const handlePrice=()=>{
        let ans=0;
        cart.map((item)=>(
            ans+=item.amount*item.price
        ))
        setPrice(ans);
    }
    const handleRemove=(id)=>{
        const arr=cart.filter((item)=>item.id!==id);
        setCart(arr);
    }
    
    useEffect(()=>{
        handlePrice();
    });
    const navigate=useNavigate();
    return(
        <div className="cart">
            <Nav size={cart.length}/>
            {cart?.map((item)=>(
                
                <div className="parent_cart">
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt="Image1" />
                        </div>
                        <div className="details">
                            <span>{item.title}</span>
                            <span>Rs: {item.price}</span>
                            <div className="quantity-controls">
                                <button onClick={()=>handleChange(item,-1)}> - </button>
                                <span>{item.amount}</span>
                                <button onClick={()=>handleChange(item,1)}> + </button>
                            </div>
                            <span>Total: Rs {item.price*item.amount}</span>
                            <button className="r" onClick={()=>handleRemove(item.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="total_cart">
                Total Cart Amount: <span>Rs {price}</span>
            </div>
            <div className="cshop">
                <button onClick={()=>navigate('/plants')}>Continue Shopping</button><br></br>
            </div>
            <div className="checkout">
            <button onClick={()=>alert("Thanks for shopping!!")}>Checkout</button>
            </div>
        </div>
    )
}
export default Cart
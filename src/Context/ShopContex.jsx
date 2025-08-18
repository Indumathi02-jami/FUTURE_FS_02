import React,{createContext, useState, useEffect} from "react";
import all_product from '../Components/Assets/all_product'


export const ShopContext = createContext(null);

const getDefaultcart=()=>{
    let cart ={}
    for (let index=0;index<all_product.length+1; index++){
        cart[index+1] =0;
    }
    return cart;
}

const ShopContextProvide =(props) =>{
    const[CartItems, setCartItems] = useState(getDefaultcart())


    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(CartItems)                                         
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
     useEffect(() => {
    console.log("Cart Updated:", CartItems);
  }, [CartItems]);

  const getTotalItems =()=>{
    let totalItem =0;
    for(const item in CartItems){
        if(CartItems[item] > 0){
            totalItem+= CartItems[item];
        }
    }
    return totalItem;
  }

  const getTotalAmt = () =>{
    let totalamt=0;
    for(const item in CartItems){
        if(CartItems[item] >0){
            let iteminfo = all_product.find((product)=> product.id===Number(item))
            totalamt+= iteminfo.new_price * CartItems[item]
        }
        
    }
    return totalamt;
  }


    const contextValue ={getTotalItems,getTotalAmt,all_product,CartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value ={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvide;
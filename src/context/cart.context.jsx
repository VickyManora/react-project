import { createContext,useState, useEffect } from "react";


const addCartItem =(cartItems,productToAdd)=>{
    const existingCartItem= cartItems.find((item)=>{
        return item.id===productToAdd.id
    })
  if(existingCartItem){
     return cartItems.map((cartItem)=>{
        return cartItem.id===productToAdd.id? {...cartItem,quantity:cartItem.quantity+1}:cartItem
     })
  }
  return [...cartItems,{...productToAdd,quantity:1}]
}

const removeCartItem = (cartItems,cartItemToRemove)=>{
  const existingCartItem= cartItems.find((item)=>{
    return item.id===cartItemToRemove.id
   })
   if(existingCartItem.quantity==1){
     return cartItems.filter(cartItem=>cartItem.id!=cartItemToRemove.id)
   }

   return cartItems.map((cartItem)=>{
    return cartItem.id===cartItemToRemove.id? {...cartItem,quantity:cartItem.quantity-1}:cartItem
 })

}

const deleteCartItem=(cartItems,cartItemToDelete)=>{
    return cartItems.filter(cartItem=>cartItem.id!=cartItemToDelete.id)
}

export const CartContext =createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    deleteItemFromCart:()=>{},
    cartCount:0,
    totalPrice:0 
})

export const CartProvider =({children})=>{
    const [isCartOpen, setIsCartOpen]= useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount,setCartCount]=useState(0);
    const [totalPrice,setTotalPrice]=useState(0);

    useEffect(()=>{
          const newCartCount = cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0) 
          setCartCount(newCartCount)
    },[cartItems])

    useEffect(()=>{
      const newPriceTotal = cartItems.reduce((total,cartItem)=>total+(cartItem.quantity*cartItem.price),0) 
      setTotalPrice(newPriceTotal)
    },[cartItems])

    const addItemToCart=(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const removetemToCart=(cartItemToRemove)=>{
      setCartItems(removeCartItem(cartItems,cartItemToRemove))
  }
  const deleteItemToCart=(cartItemToDelete)=>{
    setCartItems(deleteCartItem(cartItems,cartItemToDelete))
}
    const value = {isCartOpen,setIsCartOpen, addItemToCart, cartItems,cartCount,removetemToCart,totalPrice,deleteItemToCart};
  return  <CartContext.Provider   value={value}>{children}</CartContext.Provider>
}
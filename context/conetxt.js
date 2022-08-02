import React, {useState, useEffect, createContext, useContext} from 'react';
import {message} from 'antd'

export const AppContext = React.createContext();

export const ContextProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct
    let index

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        
        message.success('Product added to the Cart',3)

        if(checkProductInCart) {
          const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
        })
        setCartItems(updatedCartItems)
    } else {
        product.quantity = quantity;
        
        setCartItems([...cartItems, { ...product }]);
    }
    console.log(cartItems)
      };

      const toggleCartItemQuanitity = (id, value) => {
        foundProduct = cartItems?.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id) 
        if(value === 'inc') {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
          setTotalPrice((prevTotalPrice) => parseInt(prevTotalPrice) + parseInt(foundProduct.price))
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if(value === 'dec') {
          if (foundProduct.quantity > 1) {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
            setTotalPrice((prevTotalPrice) => parseInt(prevTotalPrice) - parseInt(foundProduct.price))
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
          }
        }
      }

      const onRemove = (product ) =>{
        const productremove = cartItems?.find((item)=> item._id === product._id)
        const removeItem = cartItems.filter((item)=> item._id !== product._id)
        setCartItems(removeItem)
        message.success('Product removed from the Cart')
        setTotalPrice((prevprice)=> parseInt(prevprice) - (parseInt(productremove.price) * parseInt(productremove.quantity)))
        setTotalQuantities((prevquantity)=> parseInt(prevquantity) - parseInt(productremove.quantity))
        console.log(productremove.price)
      }

      const incQty = () => {
        setQty((prevQty) => prevQty + 1);
      }
    
      const decQty = () => {
        setQty((prevQty) => {
          if(prevQty - 1 < 1) return 1;
         
          return prevQty - 1;
        });
      }

    return (
        <AppContext.Provider value={{onAdd, cartItems,totalPrice,totalQuantities,qty,onRemove ,toggleCartItemQuanitity, incQty, decQty}}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () =>{
    return useContext(AppContext)
};
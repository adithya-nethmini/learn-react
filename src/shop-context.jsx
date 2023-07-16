import React from 'react'
import { PRODUCTS } from '../products';

export const shopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i= 1; i< PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const shopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
  return (
    <shopContext.Provider>{props.children}</shopContext.Provider>
  )
}

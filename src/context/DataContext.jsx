import { createContext, useEffect, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ( { children }) => {

    
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [itemsAmount, setItemsAmount] = useState(0)

    

    const handleCartCount = (num)=> {
        if (cartCount === 0 && num === -1){
            setCartCount(0)
        } else {
            setCartCount(cartCount + num)
        }
    }

    const handleShowCart = ()=> {
        setShowCart(!showCart)
    }

    const handleAddToCart = (id) => {
        const index = cartItems.findIndex(item => item.id === id);
        
        if (index !== -1) {
            setCartItems(cartItems.map(item => {
                if (item.id === id) {
                    return {...item, amount: item.amount + cartCount};
                }
                return item;
            }));
            setCartCount(0);
        } else {
            const item = {
                title: "Fall Limited Edition Sneakers",
                price: 125.00,
                amount: cartCount,
                id: 1
            };
            setCartItems([...cartItems, item]);
            setCartCount(0);
        }
    };

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < cartItems.length; i++) {
            count += cartItems[i].amount;
        }
        setItemsAmount(count);
    }, [cartItems]);

    const handleDelete = (id)=> {
        const newCartItems = cartItems.filter(item=> item.id !== id)
        setCartItems(newCartItems)
    }

    return (
        <DataContext.Provider value={{
            cartCount,
            setCartCount,
            handleCartCount,
            showCart,
            setShowCart,
            handleShowCart,
            handleAddToCart,
            cartItems,
            itemsAmount,
            handleDelete
        }}>
        {children}
    </DataContext.Provider>
    )
}

export default DataContext;

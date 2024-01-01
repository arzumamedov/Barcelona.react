import React, { createContext, useState } from 'react'

export const BasketContext = createContext()

function BasketProvider({ children }) {
    const [basket, setBasket] = useState([])



    return (
        <>
        salam
            <BasketContext.Provider value={{ basket }}>{children}</BasketContext.Provider>
        </>

    )
}

export default BasketProvider
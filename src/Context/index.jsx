import { createContext } from "react";

const ShoppingCarContext = createContext();

export const ShoppingCarProvider = ( children ) => {
    return (
        <ShoppingCarContext.Provider>
            {children}
        </ShoppingCarContext.Provider>
    )
}
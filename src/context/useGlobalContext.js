import { createContext, useContext } from "react";

const globalContext = createContext({})
function GlobalContextProvider({ context, children }) {
    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}
export default GlobalContextProvider

export const useGlobalContext = () => {
    return useContext(globalContext)
}
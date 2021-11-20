import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false)

    const openSidebar = () => {
        setIsSidebarActive(true)
    }
    const closeSidebar = () => {
        setIsSidebarActive(false)
    }
    const openModal = () => {
        setIsModalActive(true)
    }
    const closeModal = () => {
        setIsModalActive(false)
    }



    return <AppContext.Provider value={{ isSidebarActive, isModalActive, openSidebar, closeSidebar, openModal, closeModal }}>{children}</AppContext.Provider>
}


//Custom hook
export const useGlobalContextHook = () => {
    return useContext(AppContext);
}



export { AppContext, AppProvider };
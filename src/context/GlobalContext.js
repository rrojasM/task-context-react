import { createContext } from "react";

const initalState = {
    tasks: [
        {
            id: "1",
            title: "title one",
            description: 'Some description',
            done: false
        },

        {
            id: "2",
            title: "title two",
            description: 'Some description',
            done: false
        }
    ],
}
export const GlobalContext = createContext(initalState)



export const ContextProvider = ({ children }) => {

    const addTask = () =>{
        console.log("añadiendo una tarea");
    }

    return <GlobalContext.Provider value={{...initalState, addTask}}>
        {children}
    </GlobalContext.Provider>
}
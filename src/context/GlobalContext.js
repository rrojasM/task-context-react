import { createContext, useReducer } from "react"
import appReducer from "./AppReducer"
import { v4 } from "uuid"

const initalState = {
    tasks: [
        {
            id: v4(),
            title: "title one",
            description: 'Some description',
            done: false
        },

        {
            id: v4(),
            title: "title two",
            description: 'Some description',
            done: false
        }
    ],
}
export const GlobalContext = createContext(initalState)

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initalState)

    const addTask = (task) => {
        dispatch({
            type: 'ADD_TASK',
            payload: { ...task, id: v4(), done: false }
        })
    }

    const deleteTask = (id) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        })
    }

    const updateTask = (task) => {
        dispatch({
            type: 'UPDATE_TASK',
            payload: task
        })
    }

    const taskDone = (id) => {
        dispatch({
            type: 'TASK_DONE',
            payload: id
        })
    }

    return <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, taskDone }}>
        {children}
    </GlobalContext.Provider>
}
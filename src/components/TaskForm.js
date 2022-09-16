import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate, useParams } from 'react-router-dom'

const TaskForm = () => {

  const { addTask, tasks, updateTask } = useContext(GlobalContext)
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: ""
  })

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {

    const taskFound = tasks.find(task => task.id === params.id);
    if (taskFound) {
      setTask(taskFound)
    }

  }, [params.id, tasks])

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!task.id) {
      addTask(task)
    } else {
      updateTask(task)
    }
    navigate("/")

  }

  return (
    <div className='flex justify-center items-center h-3/4'>
      <form className='bg-gray-900 p-10' onSubmit={handleSubmit}>
        <h2 className='mb-7 text-3x1'>{task.id ? 'Editing a Task' : 'Creating a Task'}</h2>
        <div className='mb-5'>
          <input
            type={'text'}
            name="title"
            placeholder='Write a title'
            onChange={handleChange}
            value={task.title}
            className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full rounded-md' />
        </div>

        <div className='mb-5'>
          <textarea
            name='description'
            rows="2"
            placeholder='Write a description'
            onChange={handleChange}
            value={task.description}
            className='py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full rounded-md'></textarea>
        </div>

        <div>
          <button className='bg-green-600 w-full hove:bg-green-500 py-2 px-5 rounded-md'>{task.id ? 'Edit Task' : 'Create Task'}</button>
        </div>
      </form>

    </div>
  )
}

export default TaskForm


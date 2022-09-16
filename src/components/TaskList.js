import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom';

const TaskList = () => {

  const { tasks, deleteTask, taskDone } = useContext(GlobalContext);

  return (
    <div className='flex justify-center'>
      <div className='w-8/12 '>
        {tasks.map(task => (
          <div className='bg-gray-900 px-20 py-5 shadow-2x1 mb-4 flex justify-between rounded' key={task.id}>
            <div className='text-left'>
              <h1 className='text-2xl uppercase'>{task.title}</h1>
              <h2 className='text-2x1 text-gray-100'>{task.description}</h2>
              <p className='text-gray-500'>{task.id}</p>
            </div>
            <div className='flex items-center'>
              <Link to={`/edit/${task.id}`} className='bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2 rounded'>Edit</Link>
              <button onClick={() => deleteTask(task.id)} className='bg-red-600 hover:bg-red-500 py-2 px-4 mr-2 rounded'>Delete</button>
              <button onClick={() => taskDone(task.id)} className='bg-green-600 hover:bg-green-500 py-2 px-4 mr-2 rounded'>{task.done ? "UNDONE" : "DONE"}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
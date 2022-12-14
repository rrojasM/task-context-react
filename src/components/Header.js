import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'

const Header = () => {
    return (
        <div>
            <div className='flex item-centet mb-10'>
                <Link to="/">
                    <h4 className='text-gray-100 font-bold text-3xl text-lg'>Task App</h4>


                </Link>

                <div className='flex-grow text-right px-4 py-2 m-2'>
                    <Link to="/add">

                        <button className='bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
                            <IoMdAdd />
                            Add Task
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Header

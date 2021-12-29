import React from 'react'

export default function TopBar({toggleAdd,setToggleAdd}) {
    return (
        <div className='top-container'>
            <h1 className='top-title'>Employees</h1>
            <button className='top-button' onClick={()=> {setToggleAdd(!toggleAdd)}}>
                {toggleAdd ? "▲":"▼"} Add Employees
            </button>
        </div>
    )
}

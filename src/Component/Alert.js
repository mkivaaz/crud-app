import React from 'react'

export default function Alert({alert, setAlert}) {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setAlert(null)
        }
    }

    return (
        <div className='backdrop' onClick={handleClick}>
            <div className='alert-msg'>
                <h1>{alert}</h1>
            </div>
        </div>
    )
}

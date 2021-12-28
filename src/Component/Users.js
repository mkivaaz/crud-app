import React from 'react'
import useApi from '../Hooks/useApi';

export default function Users() {
    const users = useApi();

    return (
        <div className='user-container'>
            
            {users  && users.data.map(user =>{
                
                return(
                <div className='disp-container'>
                    <div className='disp-name'> {user.name}</div>
                    <div className='disp-email'>{user.email}</div>
                    <div className='disp-gender'>{user.gender}</div>
                    <div className='disp-status'>{user.status}</div>
                </div>)
                
            })}
        </div>
    )
}

import axios from 'axios';
import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import {api, useApi} from '../Hooks/useApi'
import { API_KEY, BASE_URL } from './Constants';


export default function Users() {
    const users = useApi();
    const queryClient = useQueryClient();
    const [sort, setSort] = useState("name")
    const mutation = useMutation(async (id) => {return await api.delete(`/${id}`)}, 
            {
                onSuccess: () => {
                    
                    queryClient.invalidateQueries()                
                },              
            })

    const handleClick = evt => {
        let id = evt.target.id
        console.log("Clicked", id)
        mutation.mutate(id)
        console.log(mutation)      
        
    }

    const handleSort = evt => {
        setSort(evt.target.id)
    }

    return (
        <div className='user-container'>
            {!mutation.isIdle ? (<>
                {mutation.isSuccess && <div>Deleted</div>}
                {mutation.isError && <div>{mutation.error.message}</div>}            
            </>): (null)}

            <div className='disp-legend'>
                <div className='disp-name' id='name' onClick={handleSort}>Name</div>
                <div className='disp-email' id='email' onClick={handleSort}> Email</div>
                <div className='disp-gender' id='gender' onClick={handleSort}>Gender</div>
                <div className='disp-status' id='status' onClick={handleSort}>Status</div>
            </div>

            {users  && users.data.sort((a,b) => a[sort].localeCompare(b[sort]))
            .map(user =>{
                
                return(
                <div className='disp-container'>
                    <div className='disp-name'> {user.name}</div>
                    <div className='disp-email'>{user.email}</div>
                    <div className='disp-gender'>{user.gender}</div>
                    <div className='disp-status'>{user.status}
                        <button className='disp-delete' onClick={handleClick} id={user.id}>X</button>
                    </div>
                    
                </div>)
                
            })}
        </div>
    )
}

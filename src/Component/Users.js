import axios from 'axios';
import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import useApi from '../Hooks/useApi'
import { API_KEY, BASE_URL } from './Constants';

const api = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Authorization':  'Bearer ' + API_KEY
    }
})



export default function Users() {
    const users = useApi();
    const queryClient = useQueryClient();
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

    return (
        <div className='user-container'>
            {console.log(mutation.isSuccess)}
            {mutation.isSuccess && <div>Deleted</div>}
            {mutation.isError && <div>{mutation.error.message}</div>}
            {users  && users.data.map(user =>{
                
                return(
                <div className='disp-container'>
                    <div className='disp-name'> {user.name}</div>
                    <div className='disp-email'>{user.email}</div>
                    <div className='disp-gender'>{user.gender}</div>
                    <div className='disp-status'>{user.status}</div>
                    <button className='disp-delete' onClick={handleClick} id={user.id}>Delete</button>
                </div>)
                
            })}
        </div>
    )
}

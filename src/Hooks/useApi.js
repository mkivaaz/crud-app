import axios from 'axios'
import {  useMutation, useQuery } from 'react-query'
import { API_KEY, BASE_URL } from '../Component/Constants'

export const api = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Authorization':  'Bearer ' + API_KEY,
        'Content-Type':  'application/json',
    },    
})


export function useApi() {

    const{data, status} = useQuery("data", async () => {
        const res = await api.get('/', {
            params: {
                limit: 20
               }
        })
        return res.data
    }) 
    
    return data
}


export function useDeleteUser(onSuccess){
    return useMutation(async (id) => {return await api.delete(`/${id}`)}, 
    { onSuccess: onSuccess})
}

export function useCreateUser(onSuccess, onError){
    return  useMutation( (user) => {return api.post('/', user).then(onSuccess)
    .catch(onError)
  })
}



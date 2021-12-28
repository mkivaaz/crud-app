import React from 'react'
import { QueryClient, useQuery, useQueryClient } from 'react-query'
import { BASE_URL } from '../Component/Constants'



function useApi() {     
    const{data, status} = useQuery("data", async () => {
        const res = await fetch(BASE_URL)
        return res.json()
    })
    
    return data
}

export default useApi

import axios from 'axios'
import {  useQuery} from 'react-query'
import { API_KEY, BASE_URL } from '../Component/Constants'

export const api = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Authorization': 'Bearer ' + API_KEY
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

    // const [data, seData] = useState(null)

    // useEffect(()=> {
    //     api.get('/').then(res => {
    //     console.log(res.data)
    //     seData(res.data)
    // })
    // },[])


    // const{data, status} = useQuery("data", async () => {
    //     const res = await fetch(BASE_URL)
    //     return res.json()
    // })
    
    return data
}



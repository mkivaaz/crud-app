import axios from 'axios'
import {  useQuery} from 'react-query'
import { API_KEY, BASE_URL } from '../Component/Constants'

const api = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Authorization': 'Bearer ' + API_KEY
    }
})

function useApi() {     
    // const [data, seData] = useState(null)

    // useEffect(()=> {
    //     api.get('/').then(res => {
    //     console.log(res.data)
    //     seData(res.data)
    // })
    // },[])

    const{data, status} = useQuery("data", async () => {
        const res = await api.get('/')
        return res.data
    })

    // const{data, status} = useQuery("data", async () => {
    //     const res = await fetch(BASE_URL)
    //     return res.json()
    // })
    
    return data
}




export default useApi

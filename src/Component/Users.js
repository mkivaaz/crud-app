import React from 'react'
import { useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useApi, useDeleteUser} from '../Hooks/useApi'
import { actionCreators } from '../Redux/reduxIndex';


export default function Users({setAlert}) {
    const users = useApi();
    const queryClient = useQueryClient();

    // Redux
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const {sortBy} = bindActionCreators(actionCreators, dispatch)

    

    const deleteOnSuccess = () => {
        queryClient.invalidateQueries()
        setAlert("User: Deleted")
    }
    // React Query
    const mutation = useDeleteUser(deleteOnSuccess);

    const handleClick = evt => {
        let id = evt.target.id
        mutation.mutate(id)     
    }

    const handleSort = evt => {
        sortBy(evt.target.id)
    }


    return (
        <div className='user-container'>
            
            <div className='disp-legend'>
                <div className='disp-name' id='name' onClick={handleSort}>Name</div>
                <div className='disp-email' id='email' onClick={handleSort}> Email</div>
                <div className='disp-gender' id='gender' onClick={handleSort}>Gender</div>
                <div className='disp-status' id='status' onClick={handleSort}>Status</div>
            </div>

            {users  && users.data.sort((a,b) => a[state.sort].localeCompare(b[state.sort]))
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

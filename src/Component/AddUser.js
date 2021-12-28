import React from 'react'
import * as Yup from 'yup'

function AddUser() {
    
    const initialValues = {
        name: "",
        email: "",
        gender: "",
        status: "",
    }

    const validation = Yup.object().shape({
        name: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
        email: Yup.string()
                .email('Must be a valid email')
                .required('Required'),
        gender: Yup.string()
                .min(2, 'Too Short!')
                .max(6, 'Too Long!')
                .required('Required'),
        status: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),

    });

    const handleUser = (values) => {
        
    } 


    return (
        <div>
            
        </div>
    )
}

export default AddUser

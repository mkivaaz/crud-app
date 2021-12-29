import axios from 'axios';
import { Form, Formik } from 'formik';
import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import * as Yup from 'yup'
import useApi from '../Hooks/useApi';
import { API_KEY, BASE_URL } from './Constants';
import InputCus from './InputCus';

const api = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Authorization':  'Bearer ' + API_KEY
    }
})

function AddUser() {
    const queryClient = useQueryClient();
    const mutation = useMutation(async (user) => {return await api.post('/')}, 
            {
                onSuccess: () => {
                    
                    queryClient.invalidateQueries()                
                },              
            })

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
        console.log(JSON.stringify(values))
        mutation.mutate(values);
    } 


    return (
        <div className='form-body'>
            {mutation.isError && console.log(mutation.error)}    
            <Formik initialValues={initialValues} validationSchema={validation} onSubmit={handleUser}> 
            {({errors, touched}) => (
                        <Form className='form'> 
                        {/*           FORM         */}
                            <div className='field-set'>

                                <InputCus name={'name'} type={'text'} errors={errors.name} touched={touched.name} placeholder=" Enter your first name here"/> 
                                <InputCus name={'gender'} type={'text'} errors={errors.gender} touched={touched.gender} placeholder=" Enter your gender here"/>
                                <InputCus name={'email'} type={'email'} errors={errors.email} touched={touched.email} placeholder=" Enter your email here"/>
                                <InputCus name={'status'} type={'text'} errors={errors.status} touched={touched.status} placeholder=" Enter your status here"/>
    
                                <button className='btn-Add' type='submit'>Add</button>
                            </div> 

                        </Form>
                    )}
            </Formik>
        </div>
    )
}

export default AddUser

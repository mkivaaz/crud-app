import { Field } from 'formik'
import React from 'react'

function InputCus({name, placeholder,type, errors, touched}) {
    
    
    return (
        <span className='input-item'>
            <Field className='form-input' type={type}  name={name}  placeholder={placeholder}/><br/>                                                            
            {errors && touched? (<><div className='error-msg'>{errors}</div><br/></>) : null }
        </span>  
    )
}

export default InputCus
import React from 'react'
import { FormField, FormControl, FormLabel, FormMessage } from './form'
import  { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';
import { Input } from './input';

const formSchema = authFormSchema('sign-up');


interface CustomInput {
    control : Control<z.infer<typeof formSchema>> ,
    name: FieldPath<z.infer<typeof formSchema>>,
    label:string,
    placeholder: string;
}




const CustomInput = ({ control, name , label, placeholder} : CustomInput) => {
  return (
            <FormField
            control={control}
            name={name}
            render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
                <div className='flex flex-col w-full'>
                    <FormControl>
                        <Input placeholder={placeholder} className='input-class'  type={name === 'password' ? 'password' : 'text'}{...field}/>
                    </FormControl>
                    <FormMessage className='form-message mt-3' />
                </div>
            </div>
            )}
        />
  )
}

export default CustomInput

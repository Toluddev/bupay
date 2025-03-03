'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'


const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const formSchema = authFormSchema(type);

  // Define form with validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }, 
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    setisLoading(true)
    console.log(values)
    setisLoading(false)
  }

  return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
          <h1 className="text-26 font-ibm-plex-serif text-black-1 font-bold">BuPay</h1>
        </Link>

        <div className='flex flex-col gap-3 md:gap-5'>
          <h1 className='text-24 font-semibold lg:text-36 text-gray-900'>
            {user
              ? 'Link Account'
              : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'
            }
          </h1>
          <p className='text-16 font-normal text-gray-600'>
            {user ? 'Link Account to get started' : 'Please enter your details'}
          </p>
        </div>
      </header>

      {user ? (
        <div className='flex flex-col gap-4'>
          {/* Plaid Link (if needed) */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                 <div className='form-item'>
                    <FormLabel className='form-label'>
                        Email
                    </FormLabel>
                    <div className='flex flex-col w-full'>
                        <FormControl>
                            <Input placeholder='Enter your email' className='input-class' {...field}/>
                        </FormControl>
                        <FormMessage className='form-message mt-3'>

                        </FormMessage>
                    </div>
                 </div>
                )}
              /> */}

              {type === 'sign-up' && (
                <>
                <div className='flex gap-4'>
                <CustomInput 
                control={form.control} name='firstName' label='First Name' placeholder='Enter your first name' />
                <CustomInput 
                control={form.control} name='lastName' label='Last Name' placeholder='Enter your last name' />
                </div>
                <CustomInput 
                control={form.control} name='address1' label='Address' placeholder='Enter your specific address' />
                <div className='flex gap-4'>
                <CustomInput 
                control={form.control} name='state' label='State' placeholder='Example: Lagos' />
                <CustomInput 
                control={form.control} name='postalCode' label='Postal Code' placeholder='111-011' />
                </div>
                <div className='flex gap-4'>
                <CustomInput 
                control={form.control} name='dateOfBirth' label='Date of Birth' placeholder='YYYY-MM-DD' />
                <CustomInput 
                control={form.control} name='bvn' label='BVN' placeholder='Ex: 12345678901' />
                </div>
                </>
              )}

              <CustomInput 
              control={form.control} name='email' label='Email' placeholder='Enter your email' />
              <CustomInput 
              control={form.control} name='password' label='Password' placeholder='Enter your password' />



               {/* <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                 <div className='form-item'>
                    <FormLabel className='form-label'>
                        Password
                    </FormLabel>
                    <div className='flex flex-col w-full'>
                        <FormControl>
                            <Input placeholder='Enter your password' type='password' className='input-class' {...field}/>
                        </FormControl>
                        <FormMessage className='form-message mt-3'>

                        </FormMessage>
                    </div>
                 </div>
                )}
              /> */}
              <div className='flex flex-col gap-4'>
                <Button className='form-btn' type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <>
                        <Loader2 size={20} className='animate-spin' /> &nbsp; 
                        Loading...
                        </>
                    ) : type === 'sign-in' 
                    ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
             
            </form>
          </Form>

          <footer className='flex justify-center gap-1'>
            <p className='text-14 font-normal text-gray-600'>{ type === 'sign-in' ? "Don't have an account?  " : 'Already have an account'}</p>
            <Link className='form-link' href={type === 'sign-in' ? '/sign-up' : 'sign-in'}>
            {type === 'sign-in' ? 'Sign-Up' : 'Sign-n'}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm
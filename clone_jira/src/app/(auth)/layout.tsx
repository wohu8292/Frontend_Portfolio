import React, {ReactNode} from 'react'
import Image from 'next/image'
import {Button} from '../../components/ui/button'

interface AuthLayoutProps{
    children: ReactNode
}

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <main className='bg-neutral-100 min-h-screen'>
        <div className='mx-auto max-w-screen-2xl p-4'>
            <nav className='flex justify-between items-center'>
                <Image src="/logo.svg" height={152} width={56} alt='Logo'/>
                <Button variant="secondary">
                    Sign Up
                </Button>   
            </nav>
            <div className='flex flex-col items-center justify-center pt-4 md:pt-14'>
                {props.children}
            </div>
        </div>
    </main>
  )
}

export default AuthLayout
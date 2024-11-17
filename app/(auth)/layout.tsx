"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    const pathname = usePathname()
    const isSignIn = pathname === "/sign-in"

    return (
        <main className='bg-neutral-100 min-h-screen'>
            <div className='mx-auto max-w-screen-2xl p-4'>
                <nav className='flex items-center justify-between'>
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={152}
                        height={56}
                    />

                    <Button variant="secondary">
                        <Link
                            href={`${isSignIn ? "/sign-up" : "/sign-in"}`}
                        >
                            {isSignIn ? "Sign Up" : "Login"}
                        </Link>
                    </Button>
                </nav>
                <div className='flex flex-col items-center justify-center md:pt-14 pt-4'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout
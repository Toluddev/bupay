'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import Link from 'next/link'
import { sidebarLinks } from '@/constants'

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
        <SheetTrigger>
            <Image  src="/icons/hamburger.svg" width={30} height={30} alt='menu' className='cursor-pointer'/>
        </SheetTrigger>
        <SheetContent side={'left'} className='border-none bg-white'>
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif text-black-1 font-bold">BuPay</h1>
        </Link>
        <div className='mobile-nav-sheet'>
            <SheetClose asChild >
                <nav className='flex flex-col gap-6 pt-16 text-white h-full'>
                    {sidebarLinks.map((item) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                        return (
                            <SheetClose asChild key={item.route}>
                                <Link href={item.route} key={item.label}
                                    className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                                    >
                                        <Image 
                                        src={item.imgURL}
                                        alt={item.label}
                                        width={20}
                                        height={20}
                                        className={cn({
                                            'brightness-[3] invert-0': isActive
                                        })}
                                        />
                                    <p className={cn("text-16 font-semibold text-black-2", { "!text-white": isActive })}>
                                        {item.label}
                                    </p>
                                </Link>
                            </SheetClose>
                        )
                    })}
                    User
                </nav>
            </SheetClose>


            
            Footer
        </div>
        </SheetContent>
        </Sheet>

    </section>
  )
}

export default MobileNav

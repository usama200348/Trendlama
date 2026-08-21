import { Bell, Home, SearchCheck, ShoppingCart } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Search from './Search'
import ShoppingCartIcon from './ShoppingCartIcon'

const Navbar = () => {
  return (
<>
<nav className=' w-full flex items-center justify-between border-b border-gray-200 pb-4'>
    {/* Left */}
    <Link href="/" className='flex items-center'>
    <Image src='/logo.png'
    alt='Navbar Logo'
    width={36}
    height={36} 
    className='w-6 h-6 md:w-9 md:h-9'
/>
    <p className='hidden md:block capitalize text-md font-medium tracking-wider'>Trendlama</p>
    </Link>
    {/* Right */}
    <div className='flex items-center gap-6'>
<Search/>
<Link href='/'>
<Home className='w-4 h-4 text-gray-600'/>
</Link>
<Bell className='w-4 h-4 text-gray-600'/>
<ShoppingCartIcon/>
<Link href="/login">Sign In</Link>
    </div>
</nav>
</>
  )
}

export default Navbar
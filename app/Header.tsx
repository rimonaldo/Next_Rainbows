import Link from 'next/link'
import React from 'react'

function Header() {
   return (
      <header className="p-5 bg-blue-500 ">
         <Link className='px-2 py-1 bg-white text-blue-500 rounded-lg' href="/">Home</Link>
         <Link href="/todos" className='m-2 px-2 py-1 bg-white text-blue-500 rounded-lg'>Todos</Link>
         <Link href="/search" className='px-2 py-1 bg-white text-blue-500 rounded-lg'>Search</Link>
      </header>
   )
}

export default Header

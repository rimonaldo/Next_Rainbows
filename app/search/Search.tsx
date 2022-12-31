'use client'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

function Search() {
   const [search, setSearch] = useState('')
   const router = useRouter()

   const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSearch('')
      router.push(`/search/${search}`)
   }

   return (
      <form onSubmit={e=>handleSearch(e)}>
         <input type="text" value={search} placeholder="Enter Search" onChange={e => setSearch(e.target.value)} />
         <button type="submit" className="btn bg-blue-500 py-2 px-4 rounder-lg text-white font-bold">
            Search
         </button>
      </form>
   )
}

export default Search

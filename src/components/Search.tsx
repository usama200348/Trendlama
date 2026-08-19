import { SearchCheck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Search = () => {
  return (
<>
<div className='hidden sm:flex items-center gap-2 rounded-md ring-gray-200 px-2 py-1 shadow-md'>
<SearchCheck className='w-4 h-4 text-gray-500' />
<input
id='search'
placeholder='Search...'
className='text-sm outline-0'
/>
</div>
</>
)
}

export default Search
"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"


const Filter = () => {

const searchParams = useSearchParams();
const router = useRouter()
const pathName = usePathname();

const handleFilter = (value:string )=>{
    const params = new URLSearchParams(searchParams);
    params.set("sort",value);
    router.push(`${pathName}?${params.toString()}`, {scroll:false});
}
    return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">

        <span>Sort by</span>
        <select name="sort" id="sory" onChange={(e)=>handleFilter(e.target.value)} className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm ">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="asc">Low To High </option>
            <option value="desc">High To Low</option>
        </select>
    </div>
  )
}

export default Filter
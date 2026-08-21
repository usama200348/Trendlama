"use client"

import { ProductType } from "@/types"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ProductCard = ({product}:{product:ProductType}) => {
  const [productType , setProductType] = useState({
    size: product.sizes[0],
    color:product.colors[0]
  })

const handleProductType = ({
  type,
  value,
}:{
  type:"size" | "color";
  value:string;
})=>{
  setProductType(prev=>({
    ...prev,
    [type]:value,
  }));
}

  return (
    <div className="shadow-lg rounded-lg overflow-hidden ">
      <Link href={`/products/${product.id}`}>
      <div className="relative aspect-[2/3]">
      <Image src={product.images[productType.color]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300"/>
      </div>
      </Link>
      {/* Product Detail */}
      <div className="flex flex-col gap-4 p-4 ">
        <h1 className="capitalize font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
      </div>
    {/* Product Types */}
<div className="flex items-center gap-8 text-xs px-3 pb-4">

  {/* Size */}
  <div className="flex flex-col gap-1">
    <span className="text-gray-500">Size</span>

    <select
      name="size"
      id="size"
      className="ring-1 ring-gray-300 rounded-md px-2 py-1.5 outline-none cursor-pointer bg-white"
      onChange={e=>handleProductType({type:"size",value:e.target.value})}
    >
      {product.sizes.map((size) => (
        <option key={size} value={size}>
          {size.toUpperCase()}
        </option>
      ))}
    </select>
  </div>

  {/* Color */}
  <div className="flex flex-col gap-1">
    <span className="text-gray-500">Color</span>

    <div className="flex items-center gap-2 h-[32px]">
      {product.colors.map((color) => (
        <div className={`cursor-pointer border-1 ${productType.color === color ? "border-gray-400":"border-gray-200"} rounded-full p-[1.2px]`} key={color} onClick={()=>handleProductType({type:"color" , value:color})}>
        <div className="w-[14px] h-[14px] rounded-full" style={{backgroundColor:color}}/>
        </div>
      ))}
    </div>
  </div>

</div>

{/* Price And Add To Cart */}
<div className="flex items-center justify-between px-3 pb-3">

  {/* Price */}
  <p className="font-medium text-base">
    ${product.price.toFixed(2)}
  </p>

  {/* Add To Cart */}
  <button
    type="button"
    className="flex items-center justify-center gap-2
               ring-1 ring-gray-200
               shadow-md
               rounded-md
               px-5 py-2
               text-sm
               cursor-pointer
               hover:text-white
               hover:bg-black
               transition-all duration-300"
  >
    <ShoppingCart className="w-5 h-5" />
    <span>Add To Cart</span>
  </button>

</div>
    </div>
  )
}

export default ProductCard
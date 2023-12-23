import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

export default function ProductCard() {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top ' src="https://images.pexels.com/photos/3372595/pexels-photo-3372595.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>

      <div className='textPart bg-white p-3'>
        <div className=''>
            <p className='font-bold opacity-60'>H&M</p>
            <p>Full Sleeves Men's cotton t-shirt</p>
        </div>
        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>&#8377;1999</p>
            <p className=' line-through opacity-50 '>&#8377;3999</p>
            <p className=' text-green-600 font-semibold '>50% off</p>
        </div>
      </div>
    </div>
  )
}

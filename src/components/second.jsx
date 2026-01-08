import React from 'react'
import { data } from './data'
import { FaArrowRightLong } from "react-icons/fa6";

import wheel from "../assets/whil.png"


const Second = () => {
  return (
    <div className='max-w-337.5 mx-auto'>
        <h2 className='text-[#000000] text-[3rem] font-semibold my-8'>Продажа запасных частей для авто</h2>
        <div className='grid grid-cols-4 gap-8'> 
            <div className='flex gap-8 items-start bg-white shadow-[0_4px_10px_lightgray] rounded-[5px]'>
            <div className="w-2.5 h-40 bg-red-900"></div>
                {/* right */}
                <div className='flex flex-col gap-4 items-start'>
                <h3 className='text-[2rem] font-semibold text-[#000000]'>Двигатель</h3>
                    <p className='text-[20px] font-light text-[#000000]'>Картеры масляные
Крышки клапанов
Насосы масляные</p>
                <button className='flex gap-4 items-center text-[20px] font-normal'>Перейти
                <div className='text-[#C82132]'>
                <FaArrowRightLong />
                </div>
                </button>
                </div>

            </div>
            {
               data.map((val, i) =>{
                return  <div key={i} className='flex gap-8 items-start bg-[#F8F8F8] shadow-[0_4px_10px_white] rounded-[5px]'>
                <div className={`w-2.5 h-40 ${val.color}`}></div>
                    {/* right */}
                    <div className='flex flex-col gap-4 items-start'>
                    <h3 className='text-[24px] font-semibold text-[#000000]'>{val.title}</h3>
                      <img src={`${val.img}`} className='p-4' alt="" />
                   
                    </div>
    
                </div>
               })              
            }

            <div className='col-span-3 flex justify-between items-start bg-[#C83642] relative overflow-hidden p-8'>
               <div className='flex flex-col justify-between gap-15'>
               <h3 className='text-[40px] text-[#FFFFFF] font-semibold'>Каталог запасных частей</h3>
                <button className='flex gap-4 items-center text-[25px] font-normal text-[#FFFFFF] '>Перейти
                <div>
                <FaArrowRightLong />
                </div>
                </button>
               </div>

               <div className='w-[40%] absolute -bottom-20 right-4'>
                <img src={wheel} alt="" />
               </div>
            </div>

        </div>
    </div>
  )
}

export default Second
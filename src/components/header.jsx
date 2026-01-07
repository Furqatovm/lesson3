import React from 'react'
import logo from "../assets/logo.png"
import { TfiMenuAlt } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";

import { GoClock } from "react-icons/go";

import { SlLocationPin } from "react-icons/sl";



const Header = () => {
  return (
    <div className='max-w-337.5 mx-auto my-4'>
        <header className='flex gap-6 items-center'>
            {/* left */}
            <div className='flex gap-4'>
                <div className='bg-[#C83642] p-4'>
                <img src={logo} alt="" />
                </div>
                <div className='flex flex-col gap-8 justify-between'>
                    <span className='text-[#000000] text-[13px]  tracking-[3%]'>Продажа запасных частей
ГАЗ, ВАЗ, ПАЗ, УАЗ, КАМАЗ
</span>
<div>
    
<button className='flex gap-4  justify-between rounded-[5px] items-center border-3 border-red-500 p-3 text-[#000000] font-semibold text-[18px]'>
            <span className='text-red-500'>
            <TfiMenuAlt />
            </span>
            Katalog
        </button>
</div>
                </div>
            </div>


            {/* right */}
            <nav>
                {/* top */}
                <div className='gap-8 p-5 rounded-b-[15px] flex justify-between items-center '>

                    <div className='flex gap-4 items-center'>
                        <span className='text-red-500 text-[30px]'>
                        <FiPhone />
                        </span>
                        <span className='flex flex-col items-start'>
                            <span className='text-[12px] text-gray-600'>Отдел продаж:</span>
                            <span className='text-[16px] text-[#000000] font-semibold'>7 (831) 418-58-57</span>
                            <span className='text-[16px] text-[#000000] font-semibold'>7 (831) 418-58-57</span>
                        </span>
                    </div>


                    <div className='flex gap-4 items-center'>
                        <span className='text-red-500 text-[30px]'>
                        <GoClock />
                        </span>
                        <span className='flex flex-col items-start'>
                            <span className='text-[12px] text-gray-600'>Время работы:</span>
                            <span className='text-[16px] text-[#000000] font-semibold'>8:30 - 16:30</span>
                            <span className='text-[12px] text-gray-600'>Время работы:</span>
                        </span>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <span className='text-red-500 text-[30px]'>
                        < SlLocationPin/>
                        </span>
                        <span className='flex flex-col items-start'>
                            <span className='text-[12px] text-gray-600'>Адрес:</span>
                            <span className='text-[16px] text-[#000000] font-semibold'>г. Нижний Новгород Чаадаева 1у\1</span>
                            <span className='text-[12px] text-gray-600'>--------------------</span>
                        </span>
                    </div>

                    <div className='flex gap-2 items-center'>
                    <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1H33V20.6129H1V1Z" fill="#D22F27"/>
<path d="M1 1H33V7.70968H1V1Z" fill="white"/>
<path d="M1 7.70966H33V13.9032H1V7.70966Z" fill="#1E50A0"/>
<path d="M1 1H33V20.6129H1V1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <span className='font-semibold'>Ru</span>
                    </div>
                    

                </div>
                {/* bottom */}
                <div className='flex justify-between items-center px-10'>
                    {/* Главная                 о компании                 партнерам                 новости                 контакты */}

                <span className='text-[#000000] text-[16px] font-semibold uppercase'>Главная</span>
                <span className='text-[#000000] text-[16px] font-semibold uppercase'>о компании</span>
                <span className='text-[#000000] text-[16px] font-semibold uppercase'>партнерам</span>
                <span className='text-[#000000] text-[16px] font-semibold uppercase'>новости</span>
                <span className='text-[#000000] text-[16px] font-semibold uppercase'>контакты</span>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header
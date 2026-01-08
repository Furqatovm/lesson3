import React from 'react'
import gayka from "../assets/gayka.png"
import first from "../assets/trucks/first.png"
import second from '../assets/trucks/ambulance.png'
import third from "../assets/trucks/third.png"
import forth from "../assets/trucks/five.png"
import five from "../assets/trucks/six.png"
import { FaArrowRightLong } from "react-icons/fa6";

import endFirst from "../assets/forth/first.png";
import endSecond from "../assets/forth/second.png";
import endThird from "../assets/forth/third.png";




const Forth = () => {
  return (
    <section className='bg-[#F6F6F6] relative overflow-hidden'>
          <div className='w-[35%] absolute -right-40 -top-40'>
                <img src={gayka}  alt="" />
            </div>

        <div className='max-w-337.5 mx-auto py-10 relative z-10'>
          
            <div className='w-[75%] flex justify-between items-center gap-8'>
                <div>
                    <img src={first} className='max-w-62.5 w-full' alt="" />
                </div>
                <div>
                    <img src={second} className='max-w-55 w-full' alt="" />
                </div>
                <div>
                    <img src={third} className='max-w-50 w-full' alt="" />
                </div>
                <div>
                    <img src={forth} className='max-w-40 w-full' alt="" />
                </div>
                <div>
                    <img src={five} className='max-w-35 w-full' alt="" />
                </div>
            </div>


            <div>
                <h4 className='text-[48px] text-[#000000] font-semibold'>Новости</h4>
                <p className='text-[20px] text-[#000000] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt lorem placerat molestie arcu placerat </p>
            </div>

            <div className='grid grid-cols-3 gap-10 my-10 relative z-10'>
                {/* cardlar */} 


                <div className='flex flex-col gap-4'>
                   <span className='bg-white rounded-lg'>
                    <img src={endFirst} alt="" />

                   </span>
                    <span className='text-[24px] font-semibold text-[#000000]'>Новинки амортизаторы</span>
                    <div className='flex justify-between items-center py-3'>
                        <span className='text-[18px] text-[#B6B6B6]'>24.06.2022</span>
                        <button className='flex gap-4 items-center text-[20px] font-normal text-[#000000]'>Перейти
                <div className='text-[#C82132]'>
                <FaArrowRightLong />
                </div>
                </button>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                   <span className='bg-white rounded-lg'>
                    <img src={endSecond}  className='rounded-lg' alt="" />

                   </span>
                    <span className='text-[24px] font-semibold text-[#000000] leading-[100%]'>Ожидаемое поступление на склад – вакуумный усилитель тормозов</span>
                    <div className='flex justify-between items-center'>
                        <span className='text-[18px] text-[#B6B6B6]'>24.06.2022</span>
                        <button className='flex gap-4 items-center text-[20px] font-normal text-[#000000]'>Перейти
                <div className='text-[#C82132]'>
                <FaArrowRightLong />
                </div>
                </button>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                   <span className='bg-white rounded-lg'>
                    <img src={endThird} className='rounded-lg' alt="" />

                   </span>
                    <span className='text-[24px] font-semibold text-[#000000]'>Новинки амортизаторы</span>
                    <div className='flex justify-between items-center py-3'>
                        <span className='text-[18px] text-[#B6B6B6]'>24.06.2022</span>
                        <button className='flex gap-4 items-center text-[20px] font-normal text-[#000000]'>Перейти
                <div className='text-[#C82132]'>
                <FaArrowRightLong />
                </div>
                </button>
                    </div>
                </div>


            </div>

        </div>


        
    </section>
  )
}

export default Forth
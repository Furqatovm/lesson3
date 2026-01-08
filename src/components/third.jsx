import React from 'react'
import logo from "../assets/redlogo.png"
import left from "../assets/left.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import slider from "../assets/slider.png"

const Third = () => {
  return (
    <section className='flex justify-between items-center max-w-337.5 mx-auto py-24'>
        {/* left */}
        <div className='w-[48%] relative flex flex-col gap-6'>
            <img src={logo} className='absolute left-0 top-0' alt="" />
            <img src={left} className='w-full' alt="" />
            <img src={slider} className='max-w-70 w-full'  alt="" />

        </div>

        {/* right  */}
        <div className='w-[48%] flex flex-col justify-between h-full gap-10'>
            <h4 className='text-[3rem] text-[#000000] font-semibold'>О компании</h4>
            <p className='text-[#000000] text-[20px] font-light flex flex-col gap-8'>
                <span>На протяжении 6 лет компания «Автомастер» занимается поставками автозапчастей ГАЗ, УАЗ, ПАЗ, ВАЗ, Камаз.
Мы специализируемся на продвижение своего бренда ТМ PRAVT – сертифицированная торговая марка российской компании.
Наша география расширяется по всей России и ближнему зарубежью, мы стали узнаваемые.
</span>
            <span>
На сегодняшний день ассортимент нашей продукции более 600 позиций. 
С каждым годом прогресс увеличения ассортимента 
составляет не менее чем на 35%.
Производственные мощности, партнеры компании расположены на территории КНР.

            </span>
            </p>
            <button className='flex gap-4 items-center text-[20px] font-normal text-[#000000]'>Перейти
                <div className='text-[#C82132]'>
                <FaArrowRightLong />
                </div>
                </button>
        </div>
    </section>
  )
}

export default Third
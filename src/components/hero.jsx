import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Hero = () => {
  return (
    <section>
          <div className={`w-full h-[60vh] bg-[url(src/assets/herobg.png)] bg-cover bg-center max-w-337.5 mx-auto w-full] rounded-[10px]`}>
        <div className='max-w-135 w-full ml-15 flex flex-col gap-4 justify-center py-6'>
            <h1 className='text-[#FFFFFF] text-[4rem] font-semibold'>Автозапчасти</h1>
            <p className='text-[36px] font-semibold tracking-[5%] uppercase text-white'>для автомобилей марок
            ГАЗ, ВАЗ, КАМАЗ, ПАЗ и УАЗ</p>
            <div>
            <button className='flex gap-4 items-center text-[18px] font-semibold text-white bg-[#C82132] px-8 py-4 rounded-[5px]'>перейти
                <FaArrowRightLong />
            </button>
            </div>
        </div>
    </div>
</section>

  )
}

export default Hero
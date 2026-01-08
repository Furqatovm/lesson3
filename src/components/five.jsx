import React from 'react'
import logo from "../assets/lastlogo.png"

import first from "../assets/last/first.png";
import second from "../assets/last/second.png";
import third from "../assets/last/third.png";
import forth from "../assets/last/forth.png";

const Five = () => {
  return (
    <section className='max-w-337.5 mx-auto py-10'>
        <h5 className='text-center my-10 text-[2rem] text-[#C83642] font-medium'>БЕЗОПАСНОСТЬ, КОМФОРТ, НАДЕЖНОСТЬ!</h5>
        <div className='grid grid-cols-3 gap-8'>
            {/* cardlar */}
            <div className='bg-[#F8F8F8] p-10 rounded-[10px] flex items-center justify-center'>
                <p className='text-[#000000] text-[20px] font-light leading-[100%]'>
                Вся продукция  изготовлена в соответствии с Директивой  Европейского парламента и Совета Европейского Союза 2007/46/ЕС от 5 сентября 2007 г. 
                На всю продукцию, которая требует подтверждения безопасности использования на территории РФ и Таможенного союза есть подтверждение соответствию требованиям техническим регламентов: <span className='font-medium'>ТР ТС 018/2011 и ТР ТС 010/2011</span>
                </p>
            </div>


            <div className='p-10 flex flex-col gap-4 items-start justify-center border-[9px] border-[#F2F2F2] rounded-[10px]'>
                <span className='text-[30px]'>Варианты оплаты:</span>
                <p className='text-[#000000] text-[20px] font-light'>- Оплата наличными <br />
                - Для юридических лиц возможен безналичный расчёт с НДС, для ближнего зарубежья без НДС</p>
                <h6 className='text-[1.5rem] text-[#000000] font-medium'>Так же принимаем к оплате:</h6>
                <div className='flex gap-4 items-center'>
                <svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" y="0.75" width="49.5" height="34.5" rx="5.25" fill="white" stroke="black" stroke-width="1.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1256 23.7874H13.036L10.7191 14.6886C10.6092 14.27 10.3757 13.9 10.0322 13.7256C9.17508 13.2874 8.23057 12.9386 7.2002 12.7627V12.4124H12.1773C12.8642 12.4124 13.3794 12.9386 13.4653 13.5497L14.6674 20.113L17.7555 12.4124H20.7592L16.1256 23.7874ZM22.477 23.7874H19.5591L21.9618 12.4124H24.8797L22.477 23.7874ZM28.654 15.5637C28.7398 14.9511 29.255 14.6008 29.8561 14.6008C30.8006 14.5128 31.8295 14.6887 32.6881 15.1255L33.2033 12.6764C32.3446 12.3261 31.4001 12.1501 30.543 12.1501C27.711 12.1501 25.6502 13.7258 25.6502 15.9125C25.6502 17.5761 27.1099 18.4496 28.1403 18.9758C29.255 19.5005 29.6843 19.8508 29.5985 20.3755C29.5985 21.1625 28.7398 21.5128 27.8827 21.5128C26.8523 21.5128 25.822 21.2505 24.879 20.8122L24.3638 23.2628C25.3941 23.6996 26.5089 23.8755 27.5392 23.8755C30.7147 23.9619 32.6881 22.3878 32.6881 20.0252C32.6881 17.0499 28.654 16.8755 28.654 15.5637ZM42.8998 23.7874L40.5829 12.4124H38.0944C37.5792 12.4124 37.064 12.7627 36.8923 13.2874L32.6021 23.7874H35.6058L36.2053 22.1253H39.896L40.2395 23.7874H42.8998ZM38.5246 15.4757L39.3817 19.7628H36.979L38.5246 15.4757Z" fill="#172B85"/>
</svg>

<svg width="51" height="36" viewBox="0 0 51 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" y="0.75" width="49.5" height="34.5" rx="5.25" fill="white" stroke="black" stroke-width="1.5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7687 25.2444C23.9926 26.7416 21.6886 27.6454 19.171 27.6454C13.5537 27.6454 9 23.1459 9 17.5954C9 12.0449 13.5537 7.54541 19.171 7.54541C21.6886 7.54541 23.9926 8.44923 25.7687 9.94641C27.5448 8.44923 29.8488 7.54541 32.3663 7.54541C37.9837 7.54541 42.5374 12.0449 42.5374 17.5954C42.5374 23.1459 37.9837 27.6454 32.3663 27.6454C29.8488 27.6454 27.5448 26.7416 25.7687 25.2444Z" fill="#ED0006"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7686 25.245C27.9557 23.4017 29.3427 20.6586 29.3427 17.5954C29.3427 14.5322 27.9557 11.7892 25.7686 9.9458C27.5446 8.44899 29.8482 7.54541 32.3655 7.54541C37.9828 7.54541 42.5365 12.0449 42.5365 17.5954C42.5365 23.1459 37.9828 27.6454 32.3655 27.6454C29.8482 27.6454 27.5446 26.7418 25.7686 25.245Z" fill="#F9A000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.7687 25.2445C27.9555 23.4012 29.3421 20.6584 29.3421 17.5955C29.3421 14.5327 27.9555 11.7899 25.7687 9.94653C23.5819 11.7899 22.1953 14.5327 22.1953 17.5955C22.1953 20.6584 23.5819 23.4012 25.7687 25.2445Z" fill="#FF5E00"/>
</svg>

                </div>
            </div>


            <div className='p-10 rounded-[10px] bg-linear-to-br from-[#422F66] to-[#60B9A7] flex flex-col gap-8 items-start justify-center'>
                <img src={logo} className='max-w-60 w-full' alt="" />
                <p className='text-[20px] text-[#FFFFFF]  uppercase leading-[100%]'>Так же, наша компания является официальным представителем TIRSAN KARDAN (Тирсан Кардан) на территории Нижегородской области. Продукция успешно присутствует 
                на российском рынке свыше 9 лет. </p>
            </div>


        </div>


        <div className='grid grid-cols-4 gap-6 py-10'>

            <div className='flex gap-6 items-center'>
                <img src={first} className='max-w-18 w-full' alt="" />
                <span>
                    <h3 className='text-[1.5rem] text-[#000000] font-semibold'>Гарантия качества</h3>
                    <span className='text-[1rem] font-light'>Lorem ipsum dolor sit amet, consectetur </span>
                </span>
            </div>

            <div className='flex gap-6 items-center'>
                <img src={second} className='max-w-18 w-full' alt="" />
                <span>
                    <h3 className='text-[1.5rem] text-[#000000] font-semibold'>Гарантия качества</h3>
                    <span className='text-[1rem] font-light'>Lorem ipsum dolor sit amet, consectetur </span>
                </span>
            </div>

            <div className='flex gap-6 items-center'>
                <img src={third} className='max-w-18 w-full' alt="" />
                <span>
                    <h3 className='text-[1.5rem] text-[#000000] font-semibold'>Гарантия качества</h3>
                    <span className='text-[1rem] font-light'>Lorem ipsum dolor sit amet, consectetur </span>
                </span>
            </div>

            <div className='flex gap-6 items-center'>
                <img src={forth} className='max-w-18 w-full' alt="" />
                <span>
                    <h3 className='text-[1.5rem] text-[#000000] font-semibold'>Гарантия качества</h3>
                    <span className='text-[1rem] font-light'>Lorem ipsum dolor sit amet, consectetur </span>
                </span>
            </div>

        </div>
    </section>
  )
}

export default Five
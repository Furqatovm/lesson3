import React from 'react'
import gayka from "../assets/gayka.png"
import first from "../assets/trucks/first.png"
import second from '../assets/trucks/ambulance.png'
import third from "../assets/trucks/third.png"
import forth from "../assets/trucks/five.png"
import five from "../assets/trucks/six.png"

const Forth = () => {
  return (
    <section className='bg-[#F6F6F6] relative overflow-hidden'>
          <div className='w-[35%] absolute -right-40 -top-40'>
                <img src={gayka}  alt="" />
            </div>

        <div className='max-w-337.5 mx-auto py-10'>
          
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

        </div>
        
    </section>
  )
}

export default Forth
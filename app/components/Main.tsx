'use client';
import React, { Children } from 'react'
import Bet from './Bet'
import Wheel from './Wheel'
import { Toaster, toast  } from 'alert'


const Main = () => {
const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));
return (
<>
  <main className='main bg-[#0D0D0D] '>
    <div className='flex justify-between main__block h-screen overflow-hidden'>
      <div className='max-w-[444px] min-w-[444px] overflow-hidden mb-20'>
        <Wheel />
        <div>
          1
        </div>
      </div>
      <div>
        <Toaster />
        <div className={`px-2 py-2`} >
          <button className='bg-[#353333] rounded-md w-full duration-150 focus:outline-none focus:ring focus:ring-[#fff]' onClick={() => toast('Вы успешло сделали ставку 2x')}>
            <div className='px-[10px] py-5'>
              <div className='rounded-[10px] text-2xl font-bold px-16 py-2.5 text-center text-black bg-[#fff]'>
                2x    {/* ID: 13, 15, 17, 0, 2, 4, 6, 8, 11  */}
              </div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className={`px-2 py-2`}>
          <button className='bg-[#353333] rounded-md w-full duration-150 focus:outline-none focus:ring focus:ring-[#c51951]' onClick={() => toast('Вы успешло сделали ставку 3x')}>
            <div className='px-[10px] py-5'>
              <div className='rounded-[10px] text-2xl font-bold px-16 py-2.5 text-center text-black bg-[#c51951]'>
                3x   {/* ID: 12, 14, 18, 3, 7, 9  */}
              </div> 
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className={`px-2 py-2`}>
          <button className='bg-[#353333] rounded-md w-full duration-150 focus:outline-none focus:ring focus:ring-[#3bcc92]' onClick={() => toast('Вы успешло сделали ставку 5x')}>
            <div className='px-[10px] py-5'>
              <div className='rounded-[10px] text-2xl font-bold px-16 py-2.5 text-center text-black bg-[#3bcc92]'>
                5x     {/* ID: 16, 5, 10 */}
              </div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className={`px-2 py-2`}>
          <button className='bg-[#353333] rounded-md w-full duration-150 focus:outline-none focus:ring focus:ring-[#f39b3b]' onClick={() => toast('Вы успешло сделали ставку 10x')}>
            <div className='px-[10px] py-5'>
              <div className='rounded-[10px] text-2xl font-bold px-16 py-2.5 text-center text-black bg-[#f39b3b]'>
                10x   {/* ID: 1  */}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </main>
</>
)
}

export default Main
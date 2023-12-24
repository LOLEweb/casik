"use client"
import React, { useState } from 'react';
import { Wheel as WheelRo} from "react-custom-roulette";
import line from '../assets/line.png'

const Wheel = () => {

const [mustSpin, setMustSpin] = useState(false);
const [prizeNumber, setPrizeNumber] = useState(0);

const data = [ //                                      ID COLOR 
{ style: { backgroundColor: '#DD1858' } }, //12
{ style: { backgroundColor: '#F6F6F6' } }, // 13
{ style: { backgroundColor: '#DD1858' } }, //14
{ style: { backgroundColor: '#F6F6F6' } }, //15
{ style: { backgroundColor: '#46E2A3' } }, //16
{ style: { backgroundColor: '#F6F6F6' } }, //17
{ style: { backgroundColor: '#DD1858' } }, //18
{ style: { backgroundColor: '#F6F6F6' } }, // 0 
{ style: { backgroundColor: '#F1BB48' } }, // 1
{ style: { backgroundColor: '#F6F6F6' } },// 2
{ style: { backgroundColor: '#DD1858' } },// 3 
{ style: { backgroundColor: '#F6F6F6' } },// 4
{ style: { backgroundColor: '#46E2A3' } },// 5
{ style: { backgroundColor: '#F6F6F6' } },// 6
{ style: { backgroundColor: '#DD1858' } },// 7
{ style: { backgroundColor: '#F6F6F6' } },// 8
{ style: { backgroundColor: '#DD1858' } },// 9
{ style: { backgroundColor: '#46E2A3' } },// 10
{ style: { backgroundColor: '#F6F6F6' } },// 11



]

const handleSpinClick = () => {
if (!mustSpin) {
const newPrizeNumber = Math.floor(Math.random() * data.length);
setPrizeNumber(newPrizeNumber);
setMustSpin(true);
}
}



return (
<div className=" relative">
    <div className="transform rotate-0 scale-[1.6] absolute -top-48">
        <WheelRo innerRadius={72} mustStartSpinning={mustSpin} prizeNumber={prizeNumber} data={data}
            backgroundColors={['#3e3e3e', '#df3428' ]} textColors={['#ffffff']} 
            
            onStopSpinning={()=> {
            setMustSpin(false);
            }}

            outerBorderWidth={ 0 }
            radiusLineWidth={ 0 }
            


            pointerProps={
            {src: line.toString(), style: {width: '2px', height: '130px', transform: '', rotate: '0deg', top:
            '77%', right: '50%'}}
            // {src: `${line}`}
            }
            />
    </div>
    <div className='text-center relative z-20'>
        <button className='bg-[#171717] py-3 px-7 rounded-xl text-2xl' onClick={handleSpinClick}>
            SPIN
            <p>{prizeNumber}</p>
        </button>
    </div>
</div>

);
};

export default Wheel;
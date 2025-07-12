import React, { useEffect, useState } from 'react'
import '../App.css'; 

const View01 = () => {

        const [time, setTime] = useState(new Date());
      
        useEffect(() => {
          const timer = setInterval(() => {
            setTime(new Date());
          }, 1000);
      
          return () => clearInterval(timer);
        }, []);
      
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
    

  return (
    <section className='bg-black w-full h-[1000vh] relative'>
        <div>
            <div className='text-white '>
                <div className='absolute top-0 left-4 inline-block'>ANYANG    37°23′42.7″N    126°56′44.3″E</div>
                <div className="absolute top-0 right-4 text-xl font-light text-center inline-block">
                 Local Time : {hours}:{minutes}:{seconds}({hours}:{minutes}{ampm})
                </div>           
            </div>
            <div
        className="font-bold text-[8.5vw] text-white absolute top-[200px] left-12 -translate-x-1/2 origin-center whitespace-nowrap"
        style={{ fontFamily: 'Tektur, sans-serif', transform: 'scaleY(4)' }}
        >
        SOUNG MYEONG CHORL
        </div>

        <div className='text-white absolute top-[6%] left-20 text-opacity-70 w-[60px]'>
            <div className='text-left'>since</div>
            <div className='text-right'>1999</div>
        </div>

      <div className='text-white absolute top-[10%]'>
        <div>C<span style={{ fontFamily: 'Gridular, sans-serif' }}>R</span>EATIVE</div>
        <div>UI/U<span style={{ fontFamily: 'Gridular, sans-serif' }}>X</span></div>
        <div>DE<span style={{ fontFamily: 'Gridular, sans-serif' }}>S</span>IGN <span style={{ fontFamily: 'Gridular, sans-serif' }}>S</span>TUDIO</div>
      </div>
        </div>

    </section>
  )
}

export default View01
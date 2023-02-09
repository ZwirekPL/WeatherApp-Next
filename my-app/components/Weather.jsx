import React from 'react'
import Image from 'next/image';

const Weather = ({data}) => {
    // console.log(data);
  return (    
    <>  
    {/* PORTRAIT */}
      <div className='relative flex flex-col justify-start max-w-[500px] w-full h-[80vh] m-auto p-4 text-gray-300 z-10 landscape:hidden'>
        {/* Top */}
        <div className='relative flex justify-between pt-6'>
          <div className='flex flex-col items-center'>
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt='/'
              width='100'
              height='100'
            />
            <p className='text-2xl capitalize'>{data.weather[0].description}</p>
          </div>
          <p className='text-8xl'>{data.main.temp.toFixed(0)}&#176;</p>
        </div>
        {/* Bottom */}
        <div className='bg-black/70 relative p-8 rounded-md'>
            <p className='text-2xl text-center pb-6'>Aktualne informacje dla miasta: <b>{data.name}</b></p>
            <div className='flex justify-center text-center'>
                <div className='flex flex-col basis-1/3'>
                    <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                    <p className='text-xl'>Temperatura odczuwalna</p>
                </div>
                <div className='flex flex-col basis-1/3 '>
                    <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                    <p className='text-xl'>Wilgotność</p>
                </div>
                <div className='flex flex-col basis-1/3'>
                    <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} m/s</p>
                    <p className='text-xl'>Wiatr</p>
                </div>
            </div>
        </div>
      </div>
      {/* LANDSCAPE */}
      <div className='relative flex flex-row justify-around max-w-[500px] w-full max-h-fit m-auto  text-gray-300 z-10 portrait:hidden'>
        {/* Left */}
        <div className='relative flex justify-between pr-12'>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt='/'
              width='100'
              height='100'
            />
            <p className='text-2xl capitalize'>{data.weather[0].description}</p>
          </div>
          <p className=' flex flex-col text-6xl justify-center'>{data.main.temp.toFixed(0)}&#176;</p>
        </div>
        {/* Right */}
        <div className='bg-black/70 relative p-4 m-4 rounded-md'>
            <p className='text-2xl text-center pb-6'>Aktualne informacje dla miasta: <b>{data.name}</b></p>
            <div className='flex justify-center text-center'>
                <div className='flex flex-col basis-1/3 mx-2'>
                    <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                    <p className='text-xl'>Temperatura odczuwalna</p>
                </div>
                <div className='flex flex-col basis-1/3  mx-2'>
                    <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                    <p className='text-xl'>Wilgotność</p>
                </div>
                <div className='flex flex-col basis-1/3 mx-5'>
                    <p className='font-bold text-xl'>{data.wind.speed.toFixed(0)} m/s</p>
                    <p className='text-xl'>Wiatr</p>
                </div>
            </div>
        </div>
      </div>
    </>  
  );
}

export default Weather
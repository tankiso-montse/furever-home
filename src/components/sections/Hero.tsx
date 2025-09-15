import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section className="relative w-full h-full bg-amber-950">
      <div className='flex flex-col justify-between h-full w-full absolute p-10 z-10'>
        <div className='flex justify-between pr-8'>
          <h1 className='font-playfair text-8xl font-semibold tracking-tighter'>Furever Home</h1>
          <Image src={'/icons/menu-bar.svg'} alt='menu-bar' width={50} height={50} className='cursor-pointer' />
        </div>
        <p className='max-w-lg self-end'>Every pet deserves a loving home, and every person deserves the joy of a loyal companion. With thousands of cats, dogs, and other furry friends waiting, your perfect match could be just a click away.</p>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/furever-home-hero.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

export default Hero
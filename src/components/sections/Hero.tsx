'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuNavItems = ['Home', 'Why Adopt', 'Pets', 'Testimonials'];


  return (
    <section className="w-full h-full">
      <div className='flex flex-col justify-between h-full w-full absolute p-10 z-10'>
        <div className='flex justify-between pr-8'>
          <h1 className='font-red-rose text-8xl font-medium tracking-tighter'>Furever Home</h1>
          {isMenuOpen ?
            <Image src={'/icons/close.svg'} alt='close-menu' width={30} height={30} className='cursor-pointer relative z-20' onClick={() => setIsMenuOpen(false)} />
            :
            <Image src={'/icons/menu-bar.svg'} alt='menu-bar' width={50} height={50} className='cursor-pointer' onClick={() => setIsMenuOpen(true)} />
          }
        </div>
        <p className='max-w-lg self-end leading-5 font-instrument-sans'>Every pet deserves a loving home, and every person deserves the joy of a loyal companion. With thousands of cats, dogs, and other furry friends waiting, your perfect match could be just a click away.</p>
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
      {/* Create a menu bar */}
      <div className={`absolute h-64 bg-white/30 top-7 right-0 rounded-l-3xl transition-all duration-1000 ${isMenuOpen
          ? 'w-1/4 animate-slideInFromRight'
          : 'w-0 animate-slideOutToRight'
        }`}>
          <ul className={`font-instrument-sans font-semibold text-xl flex flex-col gap-4 mx-16 my-12 transition-opacity duration-200 ${isMenuOpen ? 'opacity-100 delay-500' : 'opacity-0'}`}>
            {menuNavItems.map((item) =>  {
              return <li key={item} className='cursor-pointer hover:underline relative z-10 w-3/4'>{item}</li>
            })}
          </ul>
      </div>
    </section>
  )
}

export default Hero
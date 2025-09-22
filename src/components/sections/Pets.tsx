'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../ui/Button';

function Pets() {
  const [currentDisplayedPet, setCurrentDisplayedPet] = useState<string>('Bishop');
  const pets = [
    {
      name: 'Bishop',
      description:
        "I'm a playful and affectionate dog who loves to chase laser pointers and curl up in warm laps. My favorite activities include exploring new places, climbing cat trees, and napping in sunny spots. I'm looking for a loving home where I can share my playful spirit and endless affection.",
      image: '/pets/bishop.jpeg',
    },
    {
      name: 'Belle',
      description:
        "I'm Buddy, a loyal and energetic dog who enjoys long walks in the park and playing fetch. I have a gentle nature and get along well with kids and other pets. I'm searching for a family that will take me on adventures and give me lots of belly rubs.",
      image: '/pets/belle.jpg',
    },
    {
      name: 'Luna',
      description:
        "Hi, I'm Luna! I'm a sweet and curious dog who loves meeting new people and learning new tricks. My favorite pastime is snuggling on the couch after a fun day of play. I'm hoping to find a forever home filled with love and companionship.",
      image: '/pets/spikey.jpg',
    },
  ]


  return (
    <div className='w-full h-full grid grid-cols-2 bg-secondary'>
      <div className='w-full h-full flex flex-col justify-evenly items-center'>
        {pets.find(pet => pet.name === currentDisplayedPet) && (
          <>
            <h1 className='text-white text-8xl font-red-rose font-medium tracking-tighter'>{pets.find(pet => pet.name === currentDisplayedPet)?.name}</h1>
            <span className='text-xl'>Hey, I&apos;m {pets.find(pet => pet.name === currentDisplayedPet)?.name}</span>
            <p className='max-w-4/5 text-center text-white font-instrument-sans leading-5'>{pets.find(pet => pet.name === currentDisplayedPet)?.description}</p>
          </>  
        )}
        <div>
          <Button>Adopt Me</Button>
        </div>
      </div>
      <div className='w-full overflow-hidden'>
        <Image src={'/pets/bishop.jpeg'} alt='bishop' width={300} height={400} className='w-full' />
      </div>
    </div>
  )
}

export default Pets
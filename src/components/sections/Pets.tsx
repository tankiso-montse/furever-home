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
        "I'm Bishop, a playful and affectionate dog who loves to chase laser pointers and curl up in warm laps. My favorite activities include exploring new places, climbing cat trees, and napping in sunny spots. I'm looking for a loving home where I can share my playful spirit and endless affection.",
      image: '/pets/bishop.jpeg',
    },
    {
      name: 'Belle',
      description:
        "I'm Belle, a loyal and energetic dog who enjoys long walks in the park and playing fetch. I have a gentle nature and get along well with kids and other pets. I'm searching for a family that will take me on adventures and give me lots of belly rubs.",
      image: '/pets/belle.jpg',
    },
    {
      name: 'Rigby',
      description:
        "Hi, I'm Rigby! I'm a sweet and curious dog who loves meeting new people and learning new tricks. My favorite pastime is snuggling on the couch after a fun day of play. I'm hoping to find a forever home filled with love and companionship.",
      image: '/pets/rigby.jpeg',
    },
  ]

  const handleNextPet = (Arrow: string) => {
    const currentIndex = pets.findIndex(pet => pet.name === currentDisplayedPet);
    if (Arrow === 'Left') {
      const nextIndex = (currentIndex + 1) % pets.length;
      setCurrentDisplayedPet(pets[nextIndex].name);
    } else if (Arrow === 'Right') {
      const nextIndex = (currentIndex - 1 + pets.length) % pets.length;
      setCurrentDisplayedPet(pets[nextIndex].name);
    }
  }


  return (
    <div className='w-full h-full grid grid-cols-2 bg-secondary'>
      <div className='w-full h-full flex flex-col justify-evenly items-center'>
        {pets.find(pet => pet.name === currentDisplayedPet) && (
          <>
            <h1 className='text-white text-6xl font-instrument-sans font-semibold tracking-tighter'>PETS</h1>
            <div className='w-4/5 flex justify-between'>
              <Image src={'/icons/left-arrow.svg'} alt='left-arrow' width={24} height={24} onClick={() => handleNextPet('Left')} className='cursor-pointer' />
              <span className='text-2xl font-red-rose'>Meet {pets.find(pet => pet.name === currentDisplayedPet)?.name}</span>
              <Image src={'/icons/right-arrow.svg'} alt='left-arrow' width={24} height={24} onClick={() => handleNextPet('Right')} className='cursor-pointer' />
            </div>
            <p className='max-w-4/5 min-h-32 text-center text-white font-instrument-sans leading-5'>{pets.find(pet => pet.name === currentDisplayedPet)?.description}</p>
          </>
        )}
        <div>
          <Button>Adopt Me</Button>
        </div>
      </div>
      <div className='w-full h-full overflow-hidden flex justify-center place-self-center-safe'>
        {pets.find(pet => pet.name === currentDisplayedPet) && (
          <Image src={pets.find(pet => pet.name === currentDisplayedPet)?.image || ''} alt={pets.find(pet => pet.name === currentDisplayedPet)?.name || ''} width={800} height={600} className='w-full object-fill' />
        )}
      </div>
    </div>
  )
}

export default Pets
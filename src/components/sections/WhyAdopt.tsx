'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../ui/Button';

function WhyAdopt() {
  const imageUrls = ['/family-photo-1.jpg', '/family-photo-2.jpg'];
  
  const adoptionBenefits = [
    { title: 'Affordable & Ethical', description: 'Adopting a pet is often more affordable than purchasing one from a breeder or pet store. Adoption fees typically cover vaccinations, spaying/neutering, and microchipping, making it a cost-effective option.' },
    { title: 'Save a life', description: 'By adopting a pet, you are giving a homeless animal a second chance at life. Many shelter animals face euthanasia if not adopted, so your decision to adopt can save a life and provide a loving home.' },
    { title: 'Lifelong Partner', description: 'Adopted pets often form strong bonds with their new owners, leading to lifelong companionship and loyalty. The gratitude and love from an adopted pet can be incredibly rewarding.' },
  ]
  const [activeButton, setActiveButton] = useState<string>(adoptionBenefits[0].title);
 
  
  return (
    <div className='w-full h-screen bg-white md:p-12 lg:p-20'>
      <div className='h-full flex flex-col items-center justify-around lg:justify-between xl:px-14 gap-12 md:gap-0'>
        <h1 className='text-secondary text-6xl tracking-tighter font-instrument-sans font-semibold'>WHY ADOPT</h1>
        <div className='grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:w-full xl:w-11/12 min-h-96 lg:min-h-80 rounded-4xl overflow-hidden bg-green-500'>
          {imageUrls.map((url, index) => (
            <Image key={index} src={url} alt={`family-${index + 1}`} width={200} height={200} className='w-full h-full bg-cover bg-center' />
          ))}
        </div>
        <div className='w-11/12 h-32 flex flex-col gap-12 items-center'>
          <div className='flex gap-8'>
            {adoptionBenefits.map((adoptionBenefit, index) => (
              <Button 
                key={index} 
                onClick={() => setActiveButton(adoptionBenefit.title)}
                extraClasses={`${activeButton === adoptionBenefit.title ? 'bg-secondary text-white' : ''}`}
              >{adoptionBenefit.title}</Button>
            ))}
          </div>
          {activeButton === adoptionBenefits.find(benefit => benefit.title === activeButton)?.title && (
            <p className='max-w-3xl text-center font-instrument-sans text-lg text-gray-700 animate-fadeIn transition-all duration-500'>{adoptionBenefits.find(benefit => benefit.title === activeButton)?.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default WhyAdopt
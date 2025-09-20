'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../ui/Button';

function WhyAdopt() {
  const imageUrls = ['/family-photo-1.jpg', '/family-photo-2.jpg'];
  const buttonLabels = ['Affordable & Ethical', 'Save a life', 'Lifelong Partner'];
  const [activeButton, setActiveButton] = useState<string>('');
 
  
  return (
    <div className='w-full h-screen bg-white p-20'>
      <div className='h-full flex flex-col items-center justify-between px-14'>
        <h1 className='text-secondary text-6xl tracking-tighter font-instrument-sans font-semibold'>WHY ADOPT</h1>
        <div className='grid grid-cols-2 w-11/12 min-h-80 h-80 rounded-4xl overflow-hidden'>
          {imageUrls.map((url, index) => (
            <Image key={index} src={url} alt={`family-${index + 1}`} width={200} height={200} className='w-full bg-cover bg-center' />
          ))}
        </div>
        <div className='w-11/12 h-32 flex flex-col gap-12 items-center'>
          <div className='flex gap-8'>
            {buttonLabels.map((label, index) => (
              <Button 
                key={index} 
                onClick={() => setActiveButton(label)}
                extraClasses={`${activeButton === label ? 'bg-secondary text-white' : ''}`}
              >{label}</Button>
            ))}
          </div>
          <p className='font-red-rose text-center text-secondary w-3/4'>Every adoption gives a pet a second chance at love and happiness. By choosing adoption, you’re helping reduce shelter overcrowding and rescuing an animal in need.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyAdopt
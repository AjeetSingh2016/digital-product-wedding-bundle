import React from 'react';
import Image from 'next/image';

import image1 from '@/public/assets/photos/1.webp';
import image2 from '@/public/assets/photos/2.webp';
import image3 from '@/public/assets/photos/3.webp';
import image4 from '@/public/assets/photos/4.webp';
import image5 from '@/public/assets/photos/5.webp';
import image6 from '@/public/assets/photos/6.webp';
import image7 from '@/public/assets/photos/7.webp';
import image8 from '@/public/assets/photos/8.webp';
import image9 from '@/public/assets/photos/9.webp';
import image10 from '@/public/assets/photos/10.webp';
import image11 from '@/public/assets/photos/11.webp';
import image12 from '@/public/assets/photos/12.webp';

const Photos = () => {
  const images = [
    { src: image1, title: 'Wedding Lightroom Presets' },
    { src: image2, title: 'Drag n Drop Title Animations' },
    { src: image3, title: '1500+ Premiere Pro transitions' },
    { src: image4, title: 'Drag n Drop Text Templates' },
    { src: image5, title: 'Wedding Invitation Video' },
    { src: image6, title: 'Wedding Fonts Collection' },
    { src: image7, title: 'Ultimate Retouch Panel' },
    { src: image8, title: 'Caricature Templates' },
    { src: image9, title: 'Best Photo Albums' },
    { src: image10, title: 'Birthday Album Templates' },
    { src: image11, title: 'Birthday Card Templates' },
    { src: image12, title: 'Social Media Templates' },
  ];

  return (
    <div className='mt-10'>
      <h1 className='text-center font-bold text-2xl  md:text-4xl'>Get all of this inside</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:p-4 md:px-20 m-10">
      
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center mb-5">
          <div className="relative w-full md:w-4/6 h-64">
            <Image
              src={image.src}
              alt={image.title}
              layout="fill"
              // objectFit="cover"
              placeholder="blur"
            />
          </div>
          <p className="text-center mt-2 font-bold">{image.title}</p>
        </div>
      ))}
    </div>
    </div>
    
    
  );
};

export default Photos;

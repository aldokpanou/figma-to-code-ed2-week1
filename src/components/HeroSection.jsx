import React from 'react';
import cover from '../assets/Group 2.png';
import next from '../assets/next.png';

function HeroSection() {
  return (
    <section className="p-5 sm:p-20 xl:py-24">
      <div className="container mx-auto flex flex-col items-start lg:text-left xl:flex-row ">
        <div className="w-full xl:w-1/2 mb-8">
          <h2 className="text-6xl mb-8 sm:text-8xl xl:text-9xl text-[#181D28] font-medium sm:mb-16">See the NFT new world</h2>
          <p className="text-base text-neutral-400 mb-8 font-bold">
            Vorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Etiam eu turpis molestie, dictum
          </p>
          <a className="text-neutral-600 font-semibold cursor-pointer flex items-center">
            Discover Vow
            <img src={next} alt="" className='pl-4'/>
          </a>
        </div>
        <div className="w-full xl:w-1/2">
          <img src={cover} alt="NFT Example showcasing a futuristic concept" className="w-full h-auto rounded" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
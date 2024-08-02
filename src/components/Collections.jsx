import React from 'react';
import CyberPunk from '../assets/PSX_20211230_123415 1.png';
import DarksideBull from '../assets/TOP-10-NFT-TOKENS-TO-KNOW-IN-2023-.png';
import SpaceX from '../assets/PSX_20211230_123415 1.png';
import Snoop from '../assets/PSX_20211230_123415 1.png';

const collections = [
  { name: 'CyberPunk', image: CyberPunk, bids: '65' },
  { name: 'Darkside Bull', image: DarksideBull, bids: '45' },
  { name: 'Space X Wiper', image: SpaceX, bids: '50' },
  { name: 'Snoop Dogg', image: Snoop, bids: '68' },
];

const Collections = () => {
  return (
    <section id="collections" className="px-4 sm:px-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Our Collections</h2>
        <div className="flex flex-col md:flex-row  md:items-center justify-between content-center">
          <div className="mt-8 flex space-x-4 overflow-x-auto pb-4">
            <button className="bg-neutral-800 text-white font-semibold px-4 py-2 rounded text-base">All Categories</button>
            <button className="bg-gray-300 px-4 py-2 rounded">Art</button>
            <button className="bg-gray-300 px-4 py-2 rounded">Celebrities</button>
            <button className="bg-gray-300 px-4 py-2 rounded">Gaming</button>
            <button className="bg-gray-300 px-4 py-2 rounded">Sport</button>
          </div>
          <div>
            <a href="#" className="underline">View more</a>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {collections.map((collection, index) => (
            <div key={index} className="border rounded-3xl p-4">
              <img src={collection.image} alt={collection.name} className="w-full h-56 object-cover rounded mb-4 bg-cover" />
              <h3 className="text-xl text-neutral-800 font-semibold">{collection.name}</h3>
              <button className="mt-4 border border-neutral-800 px-4 py-2 rounded w-full">Place a Bid</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;

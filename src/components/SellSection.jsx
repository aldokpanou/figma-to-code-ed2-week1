import React from 'react';
import wallet from '../assets/wallet-02.svg';
import sale from '../assets/sale-tag-02.svg';
import cloud from '../assets/cloud-download.svg';
import bitcoin from '../assets/bitcoin-ellipse.svg';

// Define the data array with information for each section
const sectionData = [
  {
    title: 'Set up your wallet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
    icon: wallet,
    bgColor: 'bg-gray-300',
    iconColor: 'text-neutral-600'
  },
  {
    title: 'Add your NFTs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
    icon: cloud,
    bgColor: 'bg-neutral-600',
    iconColor: 'text-neutral-600'
  },
  {
    title: 'Promote your NFTs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
    icon: sale ,
    bgColor: 'bg-neutral-600',
    iconColor: 'text-neutral-600'
  },
  {
    title: 'Sell your NFTs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.',
    icon: bitcoin,
    bgColor: 'bg-gray-300',
    iconColor: 'text-neutral-600'
  }
];

const CreateSellSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold">Create and Sell Now</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectionData.map((item, index) => (
            <div key={index} className="p-4 bg-gray-300 rounded-3xl">
              <div className={`bg-neutral-600 p-6 rounded-xl inline-block mb-4`}>
                <img src={item.icon} alt="{item.icon}" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreateSellSection;

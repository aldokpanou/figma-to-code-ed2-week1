import React from 'react';
import backgroundImage from '../assets/footer.png'; 

const ProfileSection = () => {
  return (
    <section
    //   className="container mx-auto py-20 bg-gradient-to-r from-black to-gray-800 text-white rounded-3xl bg-cover bg-center"
      className="container mx-auto py-20  text-white rounded-3xl bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col items-center justify-center h-full rounded-3xl p-4 md:p-8 space-y-8">
        <div className="text-center p-4 md:p-8 rounded-xl max-w-xl space-y-4">
          <h2 className="font-medium text-4xl sm:text-5xl md:text-6xl">Build your NFT profile</h2>
          <p className="font-sans text-lg sm:text-xl md:text-2xl">Join almost 10k NFT profiles on Digit!</p>
          <button className="mt-8 bg-white text-neutral-800 py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Sign up now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

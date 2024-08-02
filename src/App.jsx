import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Collection from './components/Collections';
import SellSection from './components/SellSection';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col mx-auto">
      {/* <div class="w-[1px] border-t  bg-[#E8E9EA] h-full fixed left-0 top-0 ml-40"></div> */}
      <div class="relative">
        <div class="w-[1px] bg-[#E8E9EA] h-full fixed left-0 top-0 ml-2 sm:ml-10 md:ml-30 lg:ml-40"></div>
      </div>
      <Header/>
      <HeroSection/>
      <Collection/>
      <SellSection/>
      <ProfileSection/>
      <Footer/>

      <div className="text-center mt-8">
      <div className="hidden sm:block md:hidden">
        <p className="text-lg">Current Screen Size: sm (≥ 640px)</p>
      </div>
      <div className="hidden md:block lg:hidden">
        <p className="text-lg">Current Screen Size: md (≥ 768px)</p>
      </div>
      <div className="hidden lg:block xl:hidden">
        <p className="text-lg">Current Screen Size: lg (≥ 1024px)</p>
      </div>
      <div className="hidden xl:block 2xl:hidden">
        <p className="text-lg">Current Screen Size: xl (≥ 1280px)</p>
      </div>
      <div className="hidden 2xl:block">
        <p className="text-lg">Current Screen Size: 2xl (≥ 1536px)</p>
      </div>
    </div>
    </div>
  );
}

export default App;

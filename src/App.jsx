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
      <div class="relative">
        <div class="w-[1px] bg-[#E8E9EA] h-full fixed left-0 top-0 ml-2 sm:ml-10 md:ml-30 lg:ml-40"></div>
      </div>
      <Header/>
      <HeroSection/>
      <Collection/>
      <SellSection/>
      <ProfileSection/>
      <Footer/>
    </div>
  );
}

export default App;

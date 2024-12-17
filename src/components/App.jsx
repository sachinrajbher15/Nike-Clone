import React from 'react'
import Navbar from './NavBar/NavBar.jsx'
import HeroSection from './HeroSection/HeroSection.jsx'
import Banner from './Banner/Banner.jsx'
import TrendingSection from './Trending/TrendingSection.jsx'
import ClassicsSpotlight from './ClassicsSpotlight/ClassicsSpotlight.jsx'
import DontMissSection from './DontMiss/DontMissSection.jsx'
import FooterProductCategories from './Footers/FooterProductCategories/FooterProductCategories.jsx'
import FooterSupport from './Footers/FooterSupport/FooterSupport.jsx'
import FooterLegalInfo from './Footers/FooterLegalInfo/FooterLegalInfo.jsx'
import FeaturedSection from './Featured/FeaturedSection.jsx'
import ShopBySport from './ShopBySport/ShopBySport.jsx'
import MemberBenifits from './MemberBenifits/MemberBenifits.jsx'
import DevelopedBy from './DevelopedBy/DevelopedBy.jsx'
import '../components/App.css';
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Banner />
      <FeaturedSection />
      <TrendingSection />
      <ClassicsSpotlight />
      <DontMissSection />
      <ShopBySport />
      <MemberBenifits />
      <FooterProductCategories />
      <FooterSupport />
      <FooterLegalInfo />
      <DevelopedBy />
    </>
  )
}

export default App

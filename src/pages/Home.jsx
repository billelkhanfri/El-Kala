import React from 'react'
import Banner from '../components/Banner'
import CardList from '../components/CardList/CardList'
import PlaceFilter from '../components/CardList/PlaceFilter'
import AboutSection from '../components/CardList/AboutSection'

function Home() {
  return (
    <>  
    <Banner/>

    <CardList></CardList>
    <AboutSection></AboutSection>
    </>
  )
}

export default Home
import React from 'react'
import { AboutUs, FindUs,Gallery, Header,SpecialMenu } from '../container';
function Home() {
  return (
    <div>
  <Header />
  <AboutUs />
  <SpecialMenu />
  {/* <Intro /> */}
  <Gallery />
  <FindUs />
</div>
  )
}

export default Home;

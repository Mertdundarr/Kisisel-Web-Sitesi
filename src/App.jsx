import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import ProfileSection from './components/ProfileSection'
import Projects from './components/Projects'
import Footer from './components/Footer'

{/* PageContainer kütüphane, container görevini görürü sağdan soldan boşluk bırakır  */}
function App() {
  return (
    <div>
      <PageContainer>
         <Header/>
          <Portfolio/>
          <ProfileSection/>
          <Projects/>
      </PageContainer>
      <Footer/>
    </div>
  )
}

export default App

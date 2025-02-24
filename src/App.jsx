import  { Header } from "./components/header/header"
import { BannerSection } from "./components/bannerSection/BannerSection"
import { ProjectSection } from "./components/projectsSection/projectsSection"
import { Footer } from "./components/footer/Footer"
function App() {

  return (
    <>
      <Header/>
      <main>
          <BannerSection/>
          <ProjectSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App

import About from "./components/About/About"
import Blog from "./components/Blog/Blog"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Subscribe from "./components/Subscribe/Subscribe"
import Team from "./components/Team/Team"


function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Team />
        <About />
        <Blog />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}

export default App

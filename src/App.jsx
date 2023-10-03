import About from "./components/About/About"
import Blog from "./components/Blog/Blog"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
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
      </main>
    </>
  )
}

export default App

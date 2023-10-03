import About from "./components/About/About"
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
      </main>
    </>
  )
}

export default App

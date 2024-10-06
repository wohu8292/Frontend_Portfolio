import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Review from "./components/Review"

function App() {
  return (
    <>
      <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Work />
          <Review />
        </main>
    </>

  )
}

export default App

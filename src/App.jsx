import { Footer, Header, Hero, KitDigital, Navigation, Stats } from "./components"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Navigation />
        <KitDigital />
        <Stats />
      </main>
      {/* <Contact /> */}
      <Footer />
    </>
  )
}

export default App